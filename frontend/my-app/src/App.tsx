import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Nav/>
     <div className="h-0.5 bg-black w-3/4 my-4 mx-auto"></div>


  
    </>
  )
}

export default App
