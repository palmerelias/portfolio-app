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
      <div className='profile-card'>
        <img src={profile} className="profile-img"/>
        <h1 className='title'>Welcome to my Portfolio!!</h1>
      </div>
      
    </div>
  )
}

export default App
