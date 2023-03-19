import { useState } from 'react'
import './App.css' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="nav">
        <h1>Elias Palmer</h1>
      </div>
      <div className="page-info">
        <h2>This page shows some cool CSS</h2>
      </div>
    </div>
  )
}

export default App
