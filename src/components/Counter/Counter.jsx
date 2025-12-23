import { useState } from "react"
import './Counter.css'

function Counter() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(c => c + 1);

  }
  const handleDecrement = () => {
    setCount(c => c - 1);
  }
  const handleReset = () => {
    setCount(0);
  }
  return(
    <div className="counter-wrapper">
      <h1>{count}</h1>
      <div className="button-wrapper">
        <button className="increase" onClick={handleIncrement}>Increase</button>
        <button className="reset" onClick={handleReset}>Reset</button>
        <button className="decrease" onClick={handleDecrement}>Decrease</button>
      </div>
    </div>
  )
}

export default Counter