export const TEMPLATES = {
  basicPage: {
    label: 'Basic Page',
    html: `<h1>Hello, World!</h1>\n<p>Edit the panels and click Run to see your changes.</p>`,
    css: `body {\n  font-family: sans-serif;\n  padding: 24px;\n  background: #fff;\n  color: #222;\n}`,
    js: `console.log('JavaScript is ready.');`,
  },
  buttonDemo: {
    label: 'Button Demo',
    html: `<h1>Button Demo</h1>\n<button id="btn">Click me</button>\n<p id="msg"></p>`,
    css: `body {\n  font-family: sans-serif;\n  padding: 24px;\n  background: #f0f4ff;\n  color: #222;\n}\n\nbutton {\n  padding: 10px 24px;\n  font-size: 16px;\n  background: #4f6ef7;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  opacity: 0.85;\n}`,
    js: `const btn = document.getElementById('btn');\nconst msg = document.getElementById('msg');\nlet count = 0;\n\nbtn.addEventListener('click', () => {\n  count++;\n  msg.textContent = \`Clicked \${count} time\${count === 1 ? '' : 's'}!\`;\n});`,
  },
}
