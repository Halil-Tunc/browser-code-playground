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

## Task 4 — Run button and iframe preview
- Brief: Implement the Run button so it combines the HTML, CSS, and JavaScript editor values into a preview document and renders it inside an iframe.
- What Claude proposed: Claude proposed a pure `buildDoc` helper, `srcDoc` state in `App.jsx`, a Run button handler, and iframe styling so the preview fills the preview panel.
- What I changed before approving: I confirmed this task should stay focused on the runner only and should not include templates, localStorage, tests, new dependencies, backend code, or build log changes.
- Verification: Ran `npm run build`, started the app with `npm run dev`, clicked Run, confirmed the starter output appeared, confirmed edits did not update the preview until Run was clicked again, and confirmed CSS and JavaScript affected the iframe preview.
- One thing I learned: Using an iframe with `srcDoc` lets user code run separately from the React app, which is much safer than trying to execute code in the parent page.

## Task 5 — Starter templates
- Brief: Add starter templates that can fill the HTML, CSS, and JavaScript editor panels.
- What Claude proposed: Claude proposed creating a dedicated `src/templates.js` file with Basic Page and Button Demo templates, then adding a template selector to the toolbar.
- What I changed before approving: I confirmed that selecting a template should update the editor panels only and should not automatically run the preview.
- Verification: Ran `npm run build`, started the app with `npm run dev`, selected both templates, confirmed the editors updated, confirmed the preview did not auto-run, then clicked Run and verified both previews worked.
- One thing I learned: Separating template data from the app component makes the code easier to expand later without crowding the main UI file.
