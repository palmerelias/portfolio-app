import { useState } from 'react'
import './App.css' 
import profile from './profile.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="nav">
        <h1>Elias Palmer</h1>
      </div>
      <div className='profile-img'>
        <img src={profile} className="profile"/>
      </div>
    </div>
  )
}

export default App
