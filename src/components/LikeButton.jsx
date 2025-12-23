function LikeButton() {
  let count = 0;
  const handleClick = (e) => {
    count++;
    e.target.textContent = "Like " + count;
  }
  return(
    <button onClick={(e) => handleClick(e)}>Like {count}</button>
  )
}

export default LikeButton