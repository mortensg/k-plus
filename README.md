# @cfo/k-plus

K-Plus is an Angular 20.x component library.

Design goal: *Kirby-inspired ergonomics and visual feel* without copying Kirby assets/styles — with more flexible, composable APIs.

## Documentation

- Docs website (Storybook): https://mortensg.github.io/k-plus/

![Deploy docs](https://github.com/mortensg/k-plus/actions/workflows/pages.yml/badge.svg)

## Packages

- `@cfo/k-plus` (Angular library) — source in `projects/k-plus`

## Development

```bash
npm install

# build the library
npm run build:lib

# run Storybook locally
npm run storybook

# build the static docs site
npm run build-storybook
```

## Publishing (npm)

This repo is set up for Changesets.

```bash
# create a changeset
npm run changeset

# (CI) release PR is created automatically
# (CI) when merged, publish runs with NPM_TOKEN
```

## License

MIT
