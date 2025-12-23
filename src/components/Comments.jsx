import { useState } from "react"


function Comments() {
  const [comment, setComment] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = () => {
    if (inputValue.trim() === '') return;

    const newComment = {
      id: new Date().toLocaleString(),
      text: inputValue
    }
    // Start a new timeout
      setComment([...comment, newComment])
      setInputValue('');
  }
  
  return(
    <>
      <p>Comments:  </p>
      <div>{comment.map(com => (
        <p key={com.id}>{com.text} at {<small><i>{com.id.split(',')[1]}</i></small>}</p>
      ))}</div>
      <input type="input" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
      <button onClick={handleChange}>Add</button>
    </>
  )
}

export default Comments