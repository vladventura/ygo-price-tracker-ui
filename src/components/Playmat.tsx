import { connect } from "react-redux";
import { CardInterface } from "../interfaces/CardInterface";
import Card from "./Card";
import "./Playmat.css";

interface PlaymatProps {
  allCards: CardInterface[];
}

const Playmat = ({ allCards }: PlaymatProps) => {
  return (
    <div className="cards-dealer">
      {allCards.length ? (
        allCards.map((card) => <Card card={card} key={card.code} />)
      ) : (
        <div>Loading cards</div>
      )}
    </div>
  );
};

// Move this to the redux store eventually

interface StoreState {
  cards: {
    cards: CardInterface[];
  };
}

const mapStateToProps = (state: StoreState) => {
  return {
    allCards: state.cards.cards,
  };
};

export default connect(mapStateToProps)(Playmat);
