import {useState} from 'react';

function LikeButton() {
  let [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  }
  return(
    <button onClick={updateCount}>Like {count}</button>
  )
}

export default LikeButton