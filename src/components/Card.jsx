import cardimg from '../assets/card1.jpg'
import PropTypes from 'prop-types'
import LikeButton from './LikeButton';
import FavouriteButton from './FavouriteButton';
import Comments from './Comments';

function Card(props) {

  const items = props.items;
  const category = props.category;
 // items.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
 // items.sort((a, b) => b.name.localeCompare(a.name)); // Reverse alphanbetical
 // items.sort((a, b) => a.views - b.views); // Numeric
 // items.sort((a, b) => b.views - a.views); // Reverse numeric

  //const onlyVisible = items.filter(item => item.visible);

  //const moreView = items.filter(item => item.views > 100);
  
  const itemsList = items.map(item => 
    <div className="card-wrapper" key={item.key}>
      <img loading="lazy" width={250} height={150} src={cardimg}></img>
      <div className="card-title"><strong>{item.name}</strong></div>
      {item.views ? <em>{item.views} views</em> : ""}
      <div className="card-desc">{item.desc}</div>
      <div className="card-date"><i>{item.postDate}</i></div>
      <div className="card-visibility"><i>{item.visible ? "Published" : "Unpublished"}</i></div>
      <div className="button-wrapper">
        <LikeButton />
        <FavouriteButton />
      </div>
      <Comments />
    </div>
  )
  return (
    <>
      <h3>{category.toUpperCase()}</h3>
      <div className={"posts-wrapper " + category}>
        {itemsList}
      </div>
    </>
    )

}
Card.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  postDate: PropTypes.instanceOf(Date),
  visible: PropTypes.boolean

}

Card.defaultProps = {
  name: "Default Post",
  desc: "Default description",
  postDate: "Test",
  visible: false
}
export default Card