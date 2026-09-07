# TypeScript Typedef Readonly Fields

Status: Done
Date: 2026-09-07
Scope: `genTsTypedef()` object-interface property output

## Context

`genTsType()` emits readonly TypeScript row properties, but `genTsTypedef()` currently emits mutable properties. This makes generated typedef interfaces inconsistent with the rest of the generated TypeScript model.

## Goal

Every object field emitted by `genTsTypedef()` must use the `readonly` property modifier, including optional fields.

## Non-Goals

- No change to union aliases or Lua typedef output.
- No change to array mutability.
- No change to runtime typedef conversion or checking.

## Design

Prefix each property declaration written by `genTsTypedef()` with `readonly`. Preserve comments, optional markers, resolved types, imports, and declaration order.

## Testing And Acceptance Criteria

- A `genTsTypedef()` regression assertion observes `readonly` on a generated object field.
- The checked-in typedef fixture contains `readonly` on every generated interface property.
- `npm run check` succeeds.
- `npm run test` succeeds.

## Risk And Rollback

This is a TypeScript source-compatibility change for consumers that mutate generated typedef fields. Rollback is limited to removing the emitted modifier and restoring the previous fixtures and expectations.
