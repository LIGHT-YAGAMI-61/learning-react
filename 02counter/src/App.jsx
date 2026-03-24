import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

    //  **** ABOUT HOOKS **************

function App() {

   const [counter , harshCounter] =  useState(15) 

   // let counter = 15 
  const addvalue = () => {
    console.log("Clicked" , counter);
    // counter = counter + 1
    harshCounter(counter + 1) // or harshCounter(counter)
  }

  const removevalue = () => {
    // console.log("clicked" , counter);
    // counter = counter - 1 
    harshCounter(counter - 1)
  }

  return (
    <>
      <h1>Harsh aur React</h1>

      <h2>Counter Value : {counter} </h2>


      <button
      onClick={addvalue}>Add Value {counter} </button>
      <br />
      <button
      onClick={removevalue}>Remove Value {counter} </button>
    </>
  )
}

export default App
