# @cfo/k-plus

K-Plus is an Angular 20.x component library.

Design goal: *Kirby-inspired ergonomics and visual feel* without copying Kirby assets/styles — with more flexible, composable APIs.

## Packages

- `@cfo/k-plus` (Angular library) — source in `projects/k-plus`

## Development

```bash
npm install

# build the library
npm run build:lib

# run Storybook
npm run storybook
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
