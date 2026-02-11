import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Shail",
    age: 21
  }
  let newArray = [1,5,7]

  return (
    <>
      
      <h1 className ="bg-green-400 text-black p-4 rounded-2xl">Hello Tailwind</h1>
      <Card username="Shail" btnText="click me" someObj={newArray}/>
      <Card username="Shailyyyyyyyyyy" btnText="visit me"/>


    </>
  )
}

export default App
