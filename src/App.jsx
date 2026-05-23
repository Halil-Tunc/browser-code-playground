import './App.css'

function App() {
  return (
    <div className="app">
      <header className="toolbar">
        <h1 className="toolbar-title">Code Playground</h1>
        <button type="button" className="run-btn">Run</button>
      </header>
      <main className="workspace">
        <div className="editors">
          <div className="editor-panel">
            <div className="panel-label">HTML</div>
            <textarea placeholder="Write HTML here…" />
          </div>
          <div className="editor-panel">
            <div className="panel-label">CSS</div>
            <textarea placeholder="Write CSS here…" />
          </div>
          <div className="editor-panel">
            <div className="panel-label">JavaScript</div>
            <textarea placeholder="Write JavaScript here…" />
          </div>
        </div>
        <div className="preview">
          <p className="preview-placeholder">Preview will appear here after you click Run.</p>
        </div>
      </main>
    </div>
  )
}

export default App
