import cardimg from '../assets/card1.jpg'

function Card() {

  return (
    <div className="card-wrapper">
      <img loading="lazy" width={250} height={150} src={cardimg}></img>
      <div className="card-title">Card title</div>
    </div>
  )

}

export default Card