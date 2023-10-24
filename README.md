
This branch demonstrates a TypeDoc bug.

## Summary

A link between two packages in a project with `"entryPointStrategy": "packages",` can fail to resolve (without warnings) if the dependency project has `"types"` point to a type declaration file in its `package.json`. 

## This monorepo

This project is a monorepo with two subprojects: `main-project` and `lib-project`.

`main-project` depends on `lib-project` and has a documentation comment that links to `foo`, an export of `lib-project`.

When `packages/lib-project/package.json` has `"types": "dist/lib.d.ts",` the link to `foo` (`{@link foo}`) from `main-project` is rendered as text (doesn't resolve). No warnings/errors are logged while generating documentation.

When `packages/lib-project/package.json` has `"types": "src/lib.ts",` the link resolves successfully and is rendered as expected.

## Building

Running `npm run tsc && npm run doc` compiles TypeScript in the subprojects, then runs TypeDoc with a `packages` entry point strategy.
