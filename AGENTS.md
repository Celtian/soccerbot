# Repository Guidelines

## Project overview

SoccerBot is a TypeScript library that scrapes football data from several public websites. The
public API is exported from `src/index.ts`; source-specific clients live in `src/clients`, shared
types live in `src/shared`, and general data-normalization helpers live in `src/helpers`.

## Development environment

- Use the Node.js version from `.nvmrc` (Node 24).
- Use Bun 1.3.14. Keep `bun.lock` in sync with `package.json`.
- Install dependencies with `bun ci` when the lockfile should not change.
- Do not edit generated files in `dist` or coverage output in `coverage`.

## Common commands

- `bun run build` compiles the ES2019 and ES5 distributions.
- `bun run lint` runs ESLint.
- `bun run test` runs the Vitest test suite.
- `bun run test --coverage --run` matches the CI coverage command.
- `bun run demo` runs `demo.ts`.

Before handing off a change, run the smallest relevant tests and then, when practical, run
`bun run lint`, `bun run test`, and `bun run build`.

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
