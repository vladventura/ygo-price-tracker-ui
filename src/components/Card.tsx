import { CardInterface } from "../interfaces/CardInterface";
import "./Card.css";
// Might connect to store for updating

/* Card Schema 
    name
    price
    image
    code
    timestamp
*/

interface CardProps {
  card: CardInterface;
}

const Card = ({ card }: CardProps) => {
  const { image, name, price, code } = card;
  const type = card.type ? " " + card.type.toLowerCase() : "";
  return (
    <div className={"card" + type}>
      <img src={image} alt="Card" className="card-image" />
      <div className="card-info">
        <p className="card-name">{name}</p>
        <p className="card-price">${price}</p>
        <p className="card-code">{code}</p>
      </div>
    </div>
  );
};

export default Card;
