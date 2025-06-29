import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  let addValue =()=>{ 
    console.log('value added',Math.random());
    if(count < 20){
       setCount(count+1)
    }
   

  }

  let decreaseCounter =()=>{
    if(count>0){
       setCount(count-1)
    }else{
      alert("Value can't below 0");
    }
   
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {count}</h2>
    <button onClick={addValue}>Add Value{count}</button>
    <button onClick={decreaseCounter}>Decrease Value{count}</button>
    </>
  )
}

export default App
