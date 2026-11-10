export const artByLabel: Record<string, string> = {
  Render: 'elevation',
  'Concept diagram': 'concept',
  'Site plan': 'plan',
  'Floor plan': 'plan',
  Section: 'section',
  'Product screens': 'screen',
  'UI screen': 'screen',
  'Responsive mockup': 'devices',
  Website: 'devices',
  'User flow': 'flow',
  Identity: 'poster',
  'Identity system': 'poster',
  Poster: 'poster',
  'Editorial spread': 'spread',
  'Cover image': 'rings',
  Portrait: 'person',
};

const toneByArt: Record<string, string> = {
  screen: 'dark',
  devices: 'dark',
  flow: 'dark',
  poster: 'stone',
  spread: 'stone',
  rings: 'stone',
};

export function toneFor(label: string) {
  return toneByArt[artByLabel[label] ?? ''] ?? 'paper';
}
