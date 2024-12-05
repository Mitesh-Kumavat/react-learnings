import { useState } from "react";
import './index.css'
import Card from './components/Card.jsx'


//Hook topic 

function App() {

  //This is hook , when we need to change the variable in multiple places use hook
  let [counter, setCounter] = useState(5)

  const addValue = () => {
    if (counter >= 20) {
      alert('Value should not be greater than 20')
    } else {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter <= 0) {
      alert('Value should not be less than 0')
    } else {
      setCounter(counter - 1)
    }
  }

  let myObj = {
    Myname: 'Mitesh',
    BtnText: 'Purchase'
  }

  return (


    <>
      <h1 className='bg-green-900 p-4 rounded-xl font-semibold font-thin' >Add And Remove Values...</h1>
      <h2 className="bg-cyan-400">Counter Value : {counter}</h2>
      <button onClick={addValue} className="b">Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <Card userName='Mitesh' btn='Purchase' obj ={myObj}/>
      <Card userName='Krunal' btn='Buy now' />
      <Card userName='Shiv' btn='Sell for free' />
    </>
  )
}

export default App
