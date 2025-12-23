function FavouriteButton() {
  let isFavourite = false;
  const handleClick = (e) => {
    isFavourite = !isFavourite;
    e.target.textContent = isFavourite ? "favourite" : "Add to favourite";
  }
  return(
    <button onClick={(e) => handleClick(e)}>Add to favourite</button>
  )
}

export default FavouriteButton