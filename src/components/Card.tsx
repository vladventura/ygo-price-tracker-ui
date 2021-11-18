import { CardInterface } from "../interfaces/CardInterface";
import { connect, ConnectedProps } from "react-redux";
import { refreshCard } from "../store/actions/cardsActions";
import "./Card.css";
// Might connect to store for updating

/* Card Schema 
    name
    price
    image
    code
    timestamp
*/

const Card = ({ card, refreshCard }: CardProps) => {
  const { image, name, price, code } = card;
  const type = card.type ? " " + card.type.toLowerCase() : "";

  const onRefreshClick = () => {
    refreshCard(card.code);
  };

  return (
    <div className={"card" + type}>
      <img src={image} alt="Card" className="card-image" />
      <div className="card-info">
        <p className="card-name">{name}</p>
        <p className="card-price">${price}</p>
        <div className="card-footer">
          <div className="card-refresh" onClick={onRefreshClick}>R</div>
          <div className="card-delete">X</div>
          <p className="card-code">{code}</p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    refreshCard: (code: string | number) => dispatch(refreshCard(code))
  };
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type CardProps = PropsFromRedux & {
  card: CardInterface
};

export default connector(Card);
