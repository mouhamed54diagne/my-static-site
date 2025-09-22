import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Static Site</h1>
        <p>Built with Vite + React</p>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        
        <div className="features">
          <h2>Features</h2>
          <ul>
            <li>⚡️ Fast development with Vite</li>
            <li>⚛️ React 18</li>
            <li>📦 Optimized production build</li>
            <li>🎨 Ready for custom styling</li>
            <li>🚀 Deploy anywhere</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App