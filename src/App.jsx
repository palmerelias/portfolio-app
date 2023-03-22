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
      </div>

    </div>
  )
}

export default App
