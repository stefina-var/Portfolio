interface HyphenDictionary {
  hyphenateSync(text: string, options?: { minWordLength?: number; hyphenChar?: string }): string;
}

declare module 'hyphen/bg/index.js' {
  const dictionary: HyphenDictionary;
  export default dictionary;
}

declare module 'hyphen/en-gb/index.js' {
  const dictionary: HyphenDictionary;
  export default dictionary;
}
