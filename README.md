# Caligo

Bilingual public website for **Caligo — Genomes of Neotropical butterflies and moths**.

Caligo connects regional expertise, biological collections, genomic infrastructure, training, and responsible benefit-sharing across Latin America.

## Public website

<https://fr4nzz.github.io/caligo/>

- English: <https://fr4nzz.github.io/caligo/en/>
- Español: <https://fr4nzz.github.io/caligo/es/>

## Local development

Requires Node.js 24+ and pnpm 11.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Verification

```bash
pnpm check
pnpm test
pnpm build
pnpm test:nav
```

The site is deployed automatically to GitHub Pages from `main` through `.github/workflows/deploy.yml`.
