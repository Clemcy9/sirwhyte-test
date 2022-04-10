import image from "../images/card-img.png";
import "./card.css";
function Card(props) {
  return (
    <div className="parent">
      <img src={image} className="image" alt="" />
      <h2 className="title">{props.heading}</h2>
      <div className="content">
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Card;
