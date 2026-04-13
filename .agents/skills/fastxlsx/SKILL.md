---
name: fastxlsx
description: Edit and validate `.xlsx` workbooks through the `fastxlsx` CLI. Use for config-table updates, structured-sheet edits, sheet management, style changes, and roundtrip-safe workbook modifications instead of touching workbook XML directly.
---

# FastXLSX

This is the Codex skill entrypoint for this repository.

Keep this file short. Detailed workflow rules live in [WORKFLOW.md](WORKFLOW.md) inside this Codex skill directory.

## When To Use

- Inspecting `.xlsx` workbooks before editing
- Single-cell edits and style updates
- `config-table` updates
- Structured `table` edits and profile-based workflows
- Deterministic multi-step edits through `apply --ops`
- Roundtrip validation after workbook changes

## Command Entry

For `.xlsx` tasks in Codex, read this skill's workflow first:

```text
.agents/skills/fastxlsx/WORKFLOW.md
```

Use the first available CLI entry:

```bash
fastxlsx <subcommand> ...
```

If `fastxlsx` is not on `PATH` but the package is available:

```bash
npx fastxlsx <subcommand> ...
```

Only when working inside the `fastxlsx` repository root:

```bash
npm run cli -- <subcommand> ...
```

The workflow document uses `fastxlsx` as shorthand for whichever entry is available.

## Canonical References

- Workflow: [WORKFLOW.md](WORKFLOW.md)
- Ops schema: [OPS-SCHEMA.md](OPS-SCHEMA.md)

Read the workflow document before editing. Read the ops schema only when preparing an `apply --ops` payload.
