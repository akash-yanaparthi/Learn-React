
//Password Generator Password

import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+= "0123456789"
    if (charAllowed) str+= "`~!@#$%^&*()-_=+"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  }, [length,numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{ passwordGenerator()}, [length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <h1>Password Generator </h1>
    <div>
      <div>
        <input type="text" value={password} placeholder='Password' readOnly ref={passwordRef} />
        <button onClick={copyPasswordToClipboard} >copy</button>
      </div>

      <div>
        <div>
          <input type="range" min={6} max={15} value={length} onChange={(e) =>{setLength(e.target.value)}} />
          <label>Length: {length}</label>
        </div>

        <div>
          <input type="checkbox" defaultChecked ={numberAllowed}  id="numberInput" onChange={()=>{
            setNumberAllowed((prev) => !prev);
          }}/>
          <label>Numbers</label>
          <input type="checkbox" defaultChecked ={charAllowed}  id="characterInput" onChange={()=>{
            setCharAllowed((prev) => !prev);
          }}/>
          <label>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
