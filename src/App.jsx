import { useState } from 'react'
import './App.css'
import { buildDoc } from './utils/buildDoc'
import { TEMPLATES } from './templates'

function App() {
  const [html, setHtml] = useState('<h1>Hello, World!</h1>\n<p>Edit the panels and click Run to see your changes.</p>')
  const [css, setCss] = useState('body {\n  font-family: sans-serif;\n  padding: 24px;\n  background: #fff;\n  color: #222;\n}')
  const [js, setJs] = useState("console.log('JavaScript is ready.');")
  const [srcDoc, setSrcDoc] = useState(null)
  const [selectedTemplate, setSelectedTemplate] = useState('')

  function handleRun() {
    setSrcDoc(buildDoc(html, css, js))
  }

  function handleTemplateChange(e) {
    const key = e.target.value
    if (!key) return
    setSelectedTemplate(key)
    const t = TEMPLATES[key]
    setHtml(t.html)
    setCss(t.css)
    setJs(t.js)
  }

  return (
    <div className="app">
      <header className="toolbar">
        <h1 className="toolbar-title">Code Playground</h1>
        <select value={selectedTemplate} onChange={handleTemplateChange} className="template-select">
          <option value="">— Template —</option>
          {Object.entries(TEMPLATES).map(([key, t]) => (
            <option key={key} value={key}>{t.label}</option>
          ))}
        </select>
        <button type="button" className="run-btn" onClick={handleRun}>Run</button>
      </header>
      <main className="workspace">
        <div className="editors">
          <div className="editor-panel">
            <div className="panel-label">HTML</div>
            <textarea value={html} onChange={e => setHtml(e.target.value)} />
          </div>
          <div className="editor-panel">
            <div className="panel-label">CSS</div>
            <textarea value={css} onChange={e => setCss(e.target.value)} />
          </div>
          <div className="editor-panel">
            <div className="panel-label">JavaScript</div>
            <textarea value={js} onChange={e => setJs(e.target.value)} />
          </div>
        </div>
        <div className="preview">
          {srcDoc === null
            ? <p className="preview-placeholder">Preview will appear here after you click Run.</p>
            : <iframe title="preview" srcDoc={srcDoc} sandbox="allow-scripts" />
          }
        </div>
      </main>
    </div>
  )
}

export default App
