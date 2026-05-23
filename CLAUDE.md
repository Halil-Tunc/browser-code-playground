# CLAUDE.md

## Project overview
This project is a browser-based code playground inspired by CodeSandbox. Users will write HTML, CSS, and JavaScript in separate browser editor panels, click Run, and see the output in a live iframe preview. The goal is to build a beginner-friendly web development sandbox that runs fully in the browser for quick experimentation.

## Tech stack
Use React with Vite and JavaScript. This stack is lightweight, browser-focused, fast to run locally, and appropriate for a frontend-only code playground. Use Vitest for tests, especially for pure helper functions like building the preview document and loading templates.

## Conventions
- Keep components small and focused.
- Prefer clear function names over clever code.
- Put reusable helper functions in `src/utils/`.
- Put template data in a dedicated file, such as `src/templates.js`.
- Use plain CSS unless a task explicitly asks for another styling system.
- Keep state local unless a task clearly needs shared state.
- Write tests for pure helper functions when possible.
- Run tests after meaningful changes.

## Do not do
- Do not add new dependencies without asking first.
- Do not create a backend or database for this MVP.
- Do not use `eval` to run user code.
- Do not modify tests just to make them pass.
- Do not store user code anywhere except browser localStorage.
- Do not implement authentication, sharing, accounts, or cloud persistence unless explicitly requested.
