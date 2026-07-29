# Repository Guidelines

## Project overview

SoccerBot is a TypeScript library that scrapes football data from several public websites. The
public API is exported from `src/index.ts`; source-specific clients live in `src/clients`, shared
types live in `src/shared`, and general data-normalization helpers live in `src/helpers`.

## Development environment

- Use the Node.js version from `.nvmrc` (Node 24).
- Use Yarn Classic 1.22.22. Keep `yarn.lock` in sync with `package.json`.
- Install dependencies with `yarn install --frozen-lockfile` when the lockfile should not change.
- Do not edit generated files in `dist` or coverage output in `coverage`.

## Common commands

- `yarn build` compiles the ES2019 and ES5 distributions.
- `yarn lint` runs ESLint.
- `yarn test` runs the Vitest test suite.
- `yarn test --coverage --run` matches the CI coverage command.
- `yarn demo` runs `demo.ts`.

Before handing off a change, run the smallest relevant tests and then, when practical, run
`yarn lint`, `yarn test`, and `yarn build`.

## Code and test conventions

- Follow the existing TypeScript style: single quotes, semicolons, two-space indentation, and
  explicit exported interfaces for public response shapes.
- Keep source-specific parsing inside that source's client directory. Put reusable normalization in
  `src/helpers` or `src/clients/shared`.
- Preserve the response contract used by the existing clients: return structured data and surface
  request or parsing failures consistently with neighboring implementations.
- Add or update a matching `*.spec.ts` file for behavioral changes.
- Scraper tests must use fixtures under `test/mocks`; do not make live network requests in tests.
- When an upstream page shape changes, keep fixture changes focused and include coverage for the
  affected selector or fallback.
- Public API changes must be exported through the relevant index files and documented in
  `README.md`.

## Repository hygiene

- Do not commit `dist`, `coverage`, or `node_modules`.
- Do not change the package version or generated changelog unless the task is a release.
- Preserve unrelated worktree changes.
- GitHub Actions should use the Node version from `.nvmrc` and install from the frozen Yarn lockfile.
