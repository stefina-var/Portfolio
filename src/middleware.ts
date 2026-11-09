// Typographic clean-up applied to every page when the site is built:
// correct hyphenation in paragraphs, no short words stranded at a line end,
// no dash starting a line, and no one or two words alone on a paragraph's last line.
import { defineMiddleware } from 'astro:middleware';
import bg from 'hyphen/bg/index.js';
import en from 'hyphen/en-gb/index.js';
import { getLang } from './i18n';

const NBSP = ' ';
const SOFT = '­';
const MIN_FRAGMENT = 3; // letters kept on each side of a line break
const MAX_LAST_LINE = 28; // longest ending kept together, in characters

const TOKENS = /(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>)/i;
const OPEN_BLOCK = /^<(p|li|figcaption|dd)[\s>]/i;
const CLOSE_BLOCK = /^<\/(p|li|figcaption|dd)>/i;
const SHORT_WORD =
  /(?<=^|[\s(„"“«])(в|във|с|със|и|а|о|у|к|на|за|от|до|по|не|да|но|ще|a|an|i|the|of|to|in|on|at|by|or) +(?=\S)/giu;
const WORDS = /[\s ]+/;

const bindShortWords = (text: string) =>
  text.replace(SHORT_WORD, `$1${NBSP}`).replace(/ +([–—])/g, `${NBSP}$1`);

function bindLastSpace(text: string) {
  const bound = text.replace(/ (?=[^ ]*$)/, NBSP);
  const ending = bound.match(/[^ ]*$/)?.[0] ?? '';
  return ending.length <= MAX_LAST_LINE ? bound : text;
}

function keepEnding(text: string) {
  const trimmed = text.trimEnd();
  if (trimmed.trim().split(WORDS).length < 6) return text;
  return bindLastSpace(bindLastSpace(trimmed));
}

// Merges fragments that are too short, so at least three letters stay on each side.
function tidyWord(word: string, script: RegExp) {
  if (!script.test(word)) return word.replaceAll(SOFT, '');
  const parts = word.split(SOFT);
  while (parts.length > 1 && parts[0].length < MIN_FRAGMENT) parts.splice(0, 2, parts[0] + parts[1]);
  while (parts.length > 1 && parts[parts.length - 1].length < MIN_FRAGMENT) {
    parts.splice(-2, 2, parts[parts.length - 2] + parts[parts.length - 1]);
  }
  return parts.join(SOFT);
}

function hyphenate(text: string, lang: 'en' | 'bg') {
  if (text.trim().split(WORDS).length < 6) return text;
  const dictionary = lang === 'bg' ? bg : en;
  const script = lang === 'bg' ? /\p{Script=Cyrillic}/u : /\p{Script=Latin}/u;
  const result = dictionary
    .hyphenateSync(text, { minWordLength: 8 })
    .replace(/[\p{L}­]+/gu, (word) => tidyWord(word, script));
  // The words kept together at the end must not split, or a fragment would sit alone.
  const lastSpace = result.lastIndexOf(' ');
  return result.slice(0, lastSpace) + result.slice(lastSpace).replaceAll(SOFT, '');
}

function refine(html: string, lang: 'en' | 'bg') {
  const tokens = html.split(TOKENS);
  return tokens
    .map((token, index) => {
      if (index % 2 === 1 || !token.trim()) return token;
      const isParagraph = CLOSE_BLOCK.test(tokens[index + 1] ?? '') && OPEN_BLOCK.test(tokens[index - 1] ?? '');
      const bound = bindShortWords(token);
      return isParagraph ? hyphenate(keepEnding(bound), lang) : bound;
    })
    .join('');
}

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  if (!(response.headers.get('content-type') ?? '').includes('text/html')) return response;
  const html = refine(await response.text(), getLang(context.url));
  return new Response(html, { status: response.status, statusText: response.statusText, headers: response.headers });
});
