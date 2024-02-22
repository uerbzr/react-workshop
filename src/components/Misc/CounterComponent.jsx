
import React from 'react'
import { useState } from 'react'


function CounterComponent() {
    const [count, setCount] = useState(1)

    const incrementCount = () => {
        setCount(count+1)
    }
    const decrementCount = () => {
        setCount(count - 1)
    }

  return (
    <>
    <div>CounterComponent</div>
    <p>{count}</p>
    <p>{count===21 ? 'Thats my age!' : null }</p>
    <button className='btn btn-danger' 
        onClick={()=> incrementCount()}
        >+ Increment</button>
    <button className='btn btn-primary'
        onClick={()=> decrementCount()}>
        - Decrement
    </button>
    </>
  )
}

export default CounterComponent