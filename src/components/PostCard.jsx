import cardimg from '../assets/card1.jpg'
import FavouriteButton from './FavouriteButton';

import PostComment from './PostComment/PostComment';
const PostCard = ({items}) => {

  const itemsList = items.map(item => 
    <div className="card-wrapper" key={item.id}>
      <img loading="lazy" width={250} height={150} src={cardimg}></img>
      <div className="card-title"><strong>{item.title}</strong></div>
      <em>Likes: {item.reactions.likes}</em>
      <em>Likes: {item.reactions.dislikes}</em>
      <div className="card-desc">{item.body.slice(0, 20)}</div>
      <div className="button-wrapper">
        <FavouriteButton />
      </div>
      <PostComment />
    </div>
  )
  return (
    <>
      <h3>Api Posts</h3>
      <div className={"posts-wrapper"}>
        {itemsList}
      </div>
    </>
    )
}

export default PostCard;