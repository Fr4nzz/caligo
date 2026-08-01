import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');

const globalCss = read('src/styles/global.css');
const science = read('src/components/pages/SciencePage.astro');
const projects = read('src/components/pages/ProjectsPage.astro');
const about = read('src/components/pages/AboutPage.astro');

const failures = [];
const expect = (condition, message) => {
  if (!condition) failures.push(message);
};

const localTypographyProperties = [
  'font-family',
  'font-size',
  'font-weight',
  'line-height',
  'letter-spacing',
  'text-transform',
];

const sharedRoles = {
  'content-heading': ['font-family: var(--font-display)', 'font-size: var(--step-2)'],
  'content-lead': ['font-size: var(--step-0)'],
  'content-body': ['font-size: var(--step-0)', 'line-height: 1.65'],
  'content-label': ['font-family: var(--font-mono)', 'font-size: var(--step--2)'],
  'content-meta': ['font-size: var(--step--1)', 'line-height: 1.5'],
};

for (const [className, declarations] of Object.entries(sharedRoles)) {
  const match = globalCss.match(new RegExp(`\\.${className}\\s*\\{([^}]*)\\}`));
  expect(match, `global.css must define .${className}`);
  for (const declaration of declarations) {
    expect(match?.[1].includes(declaration), `.${className} must include ${declaration}`);
  }
}

for (const [pageName, source] of [['Science', science], ['Pilot Projects', projects]]) {
  expect(source.includes('content-heading'), `${pageName} must use the shared heading role`);
  expect(source.includes('content-body'), `${pageName} must use the shared body role`);
  expect(source.includes('content-label'), `${pageName} must use the shared label role`);
  expect(source.includes('content-meta'), `${pageName} must use the shared metadata role`);
}

expect(about.includes('section-heading content-heading'), 'About must use the shared heading role');
expect(about.includes('prose-para content-body'), 'About must use the shared body role');
expect(about.includes('section-eyebrow content-label'), 'About must use the shared label role');

for (const selector of ['section-heading', 'prose-para', 'section-eyebrow']) {
  const matches = about.matchAll(new RegExp(`\\.${selector}\\s*\\{([^}]*)\\}`, 'g'));
  for (const match of matches) {
    for (const property of localTypographyProperties) {
      expect(
        !new RegExp(`(?:^|\\s)${property}\\s*:`).test(match[1]),
        `About .${selector} must not redefine shared ${property}`,
      );
    }
  }
}

expect(projects.includes('content-lead'), 'Pilot Projects must use the shared lead role');

const localRoleSelectors = [
  'question-heading',
  'question-sources',
  'question-sources-label',
  'pilot-continuation-label',
  'pilot-heading',
  'pilot-taxon',
  'pilot-hook',
  'pilot-body-text',
  'pilot-field-label',
  'pilot-field-value',
  'pilot-source-line',
  'pilot-source-label',
];

for (const [pageName, source] of [['Science', science], ['Pilot Projects', projects]]) {
  for (const selector of localRoleSelectors) {
    const match = source.match(new RegExp(`\\.${selector}\\s*\\{([^}]*)\\}`));
    if (!match) continue;
    for (const property of localTypographyProperties) {
      expect(
        !new RegExp(`(?:^|\\s)${property}\\s*:`).test(match[1]),
        `${pageName} .${selector} must not redefine shared ${property}`,
      );
    }
  }
}

const retiredProjectSelectors = [
  'pilot-closing',
  'pilot-details',
  'pilot-details-body',
  'pilot-sources-disclosure',
  'pilot-sources-body',
  'pilot-source-note',
  'pilot-sources',
  'pilot-source',
  'pilot-proposal',
  'pilot-proposal-body',
  'pilot-leads-note',
  'pilot-open-status',
  'pilot-extra-list',
  'pilot-extra-item',
];

for (const selector of retiredProjectSelectors) {
  expect(
    !new RegExp(`\\.${selector}(?:\\s|:|\\{|\\.)`).test(projects),
    `ProjectsPage must not retain unused .${selector} styles`,
  );
}

if (failures.length) {
  console.error('Editorial typography contract failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Editorial typography contract passed.');
