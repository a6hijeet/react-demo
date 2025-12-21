import cardimg from '../assets/card1.jpg'
import PropTypes from 'prop-types'

function Card(props) {

  return (
    <div className="card-wrapper">
      <img loading="lazy" width={250} height={150} src={cardimg}></img>
      <div className="card-title"><strong>{props.name}</strong></div>
      {props.views ? <em>{props.views} views</em> : ""}
      <div className="card-desc">{props.desc}</div>
      <div className="card-date"><i>{props.postDate}</i></div>
      <div className="card-visibility"><i>{props.visible ? "Published" : "Unpublished"}</i></div>
    </div>
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