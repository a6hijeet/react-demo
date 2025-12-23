import { useState } from "react"

function Color() {

  const [color, setColor] = useState('#ffffff');
  const handleChange = (e) => {
    setColor(e.target.value);
  }
  return(
    <div className="color-wrapper">
      <h1>Color picker</h1>
      <div className="color-display" style={{backgroundColor: color}}>

        
      </div>
      <p>Selected color : {color}</p>
      <label>Select color</label>
      <input type="color" value={color} onChange={(e) => handleChange(e)}></input>
    </div>
  );
}

export default Color