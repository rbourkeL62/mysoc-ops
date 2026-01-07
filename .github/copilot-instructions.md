# Copilot / Agent Quick Instructions (compact)

**development[] CHECKLIST — MANDATORY before PR**
- [ ] `npm run lint`  — fix lint errors
- [ ] `npm run build` — ensure build succeeds
- [ ] `npm run test`  — all tests pass

Purpose: Short, actionable guidance to make agents productive in this repo.

## Snapshot
- Small React + TypeScript app (Vite) with Tailwind v4; source in `src/`.
- UI components in `src/components/`; game state in `src/hooks/useBingoGame.ts`.
- Rules and core logic in `src/utils/bingoLogic.ts` (tests in `src/utils/bingoLogic.test.ts`).

## Common workflows
- Setup: `npm install` (Node 22+)
- Dev: `npm run dev` (live preview)
- Build: `npm run build` (tsc + vite)
- Test: `npm run test` (Vitest)
- Lint: `npm run lint` (ESLint)

## Conventions (do these)
- Keep components small and focused; add new UI in `src/components/`.
- Put pure business logic in `src/utils/` and add corresponding tests in `src/utils/*.test.ts`.
- Centralize game-level behavior in `src/hooks/useBingoGame.ts`.
- `src/data/questions.ts` is the canonical source for board content.
- Follow `.github/instructions/tailwind-4.instructions.md` for Tailwind v4 patterns (`@theme`, container queries, etc.).

## Agent notes
- **Do not edit** `.lab/` (see `.lab/.ignored-by-agents`).
- Reuse `.github/agents/*` and `.github/prompts/*` for task templates (TDD, UI review, quiz generation).
- For PR handoff, prefer `github/create_pull_request_with_copilot`.
- UI reviews: `ui-review.agent.md` prefers Playwright subagents; otherwise verify visually with `npm run dev`.

## Quick examples
- Add question category: edit `src/data/questions.ts` + add tests in `src/utils/bingoLogic.test.ts`.
- Fix rule bug: add failing test in `src/utils/bingoLogic.test.ts`, implement minimal change in `src/utils/bingoLogic.ts`, run tests.

## PR guidance
- Keep PRs small, include tests for logic changes, and note how to preview UI (`npm run dev`).

## Key files (quick refs)
`README.md`, `.lab/GUIDE.md`, `.github/instructions/*`, `.github/agents/*`, `src/hooks/useBingoGame.ts`, `src/utils/bingoLogic.ts`, `src/data/questions.ts`, `src/components/`

## Design Guide — Chalkboard Classroom 🎒
- **Purpose:** A tactile chalkboard theme (Schoolbell headings, chalk textures) for a playful classroom feel.
- **Tokens:** CSS vars: `--chalkboard-bg`, `--chalk-ink`, `--chalk-green`, `--chalk-yellow`, `--chalk-border`, `--chalk-faint`.
  - Tailwind: add `colors.chalk`, `fontFamily.schoolbell`, `boxShadow.chalk-frame` in `tailwind.config.ts`.
- **Assets (public/assets):** `chalk-grain.svg` (background texture), `chalk-check.svg` (marked icon), `eraser.svg`, `apple.svg` (header). Prefer SVGs < 20KB.
- **Usage:** Use `useTheme()` to toggle theme and set `data-theme="chalkboard"` on `<html>`; helpers: `.chalk-board`, `.chalk-text`, `.chalk-square`, or Tailwind classes: `bg-chalkboard`, `text-chalk-ink`, `font-schoolbell`.
- **Accessibility & tests:** Ensure `role="dialog" aria-modal="true"` on modals, visible `:focus-visible` outlines, non-color markers for marked squares; add unit tests for `useTheme` and visual snapshots for Start and Game screens in chalk state.
- **PR checklist:** add/optimize assets, update README notes, include screenshots for both themes, verify contrast >= 4.5:1 for body text, and add visual snapshots.

---
If you'd like the checklist extended (e.g., lint autofix, labels, or CI checks), tell me what to add and I'll update it.