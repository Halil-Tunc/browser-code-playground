export function buildDoc(html, css, js) {
  return `<!DOCTYPE html>
<html>
<head><style>${css}</style></head>
<body>
${html}
<script>${js}<\/script>
</body>
</html>`
}
