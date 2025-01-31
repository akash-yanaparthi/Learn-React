import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello Akash</h1>
    <Card photoname="Nature"/> // here we are passing the values of props
    </>
  )
}

export default App
