import { useState } from 'react'
import './App.css' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="nav">
      <h1>Elias Palmer</h1>
      <h1 className="nav-btn"></h1>
    </div>
  )
}

export default App
