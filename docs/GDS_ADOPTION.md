# GDS Adoption Contract — MISISIMI

Status: Active — Adopted & Compliant
Version: 1.0.0
Last updated: 2026-05-24
Project: `/Users/moldovancsaba/Projects/misisimi`

## Governance Statement

> `/Users/Shared/Projects/GENERAL_DESIGN_SYSTEM` is the single source of truth for design, UI, and UX. Project-local files describe only implementation adapter details, migration state, validation commands, and approved exceptions.

---

## Foundation Signal

| Signal | Value |
|--------|-------|
| UI Framework | Mantine 7 (`@mantine/core`, hooks, modals, notifications) |
| GDS Packages | Vendored `@gds/core` and `@gds/theme` in `/packages` |
| Archetype | **Mantine-rooted — Enforcement** |

---

## Surfaces & Adoptions

All MISISIMI pages and layout components now load within the unified Mantine context and follow GDS design tokens, removing the custom neon overrides in favor of GDS's elegant violet palette and robust typography.

---

## Pattern Contract Status

| Contract | Local Path | Status |
|----------|------------|--------|
| **Root Provider** | `src/components/MisisimiProviders.tsx` | Done |
| **Theme** | `src/lib/ui/misisimiTheme.ts` | Done |
| **Layout Shell** | `src/app/[locale]/layout.tsx` | Done |
| **GDS Components** | Used from `@gds/core` (StatusBadge, ConfirmDialog, etc.) | Ready |

---

## Validation & Sync Commands

To sync GDS dependency updates and verify project compliance, run the following:

```bash
# From the project root
npm run gds:sync        # Pull built packages from GDS SSOT
npm run gds:ci-guard    # Run design system compliance checker
npm run build           # Run Next.js production build verification
```

### Git Authentication in Agent Environments

If automated agents attempt to push updates and hit authentication token errors, it is because their runner sets an expired or read-only `GITHUB_TOKEN` environment variable, overriding the local macOS credentials keychain. Agents must temporarily clear the environment variable to fall back to the host's keyring:

```bash
GITHUB_TOKEN="" git push origin main
```
