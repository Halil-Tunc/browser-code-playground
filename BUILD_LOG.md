# BUILD_LOG.md

## Project
Browser-based code playground inspired by CodeSandbox.

## Task 1 — Scaffold repo and author CLAUDE.md
- Brief: Create the initial React/Vite capstone repo and add project-specific Claude instructions.
- What Claude proposed: Not used for the initial scaffold; I created the Vite app and authored the first project instructions directly.
- What I changed before approving: I chose a realistic MVP scope: browser-only HTML/CSS/JS playground instead of a full cloud IDE.
- Verification: Ran the Vite dev server and opened the app at http://localhost:5173/.
- One thing I learned: A clear capstone scope matters because “build CodeSandbox” is too broad, but a browser-only playground is realistic.

## Task 2 — Base app shell
- Brief: Create the main browser playground layout with a title, editor area, preview area, and basic styling.
- What Claude proposed: Claude proposed replacing the default Vite page with a full-height app shell containing a toolbar, three editor placeholders, and a preview placeholder.
- What I changed before approving: I confirmed the task should stay layout-only and should not include Run button logic, templates, localStorage, tests, or new dependencies.
- Verification: Ran `npm run build`, started the app with `npm run dev`, and confirmed the browser showed the Code Playground title, HTML/CSS/JavaScript panels, and preview placeholder.
- One thing I learned: A clear layout-only task keeps the agent from jumping ahead into feature logic too early.

## Task 3 — Editor panels with starter code
- Brief: Turn the HTML, CSS, and JavaScript placeholder panels into controlled textareas with starter code.
- What Claude proposed: Claude proposed using React `useState` for the three editor values and replacing the uncontrolled placeholder textareas with controlled inputs.
- What I changed before approving: I confirmed the task should not include Run button logic, iframe preview, templates, localStorage, tests, new dependencies, or build log changes.
- Verification: Ran `npm run build`, started the app with `npm run dev`, and confirmed the browser showed starter HTML, CSS, and JavaScript that I could edit in each panel.
- One thing I learned: Keeping preview behavior out of this task made the editor state change easy to verify by itself.
