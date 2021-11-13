import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "../store/reducers/rootReducer";
import Card from "./Card";
import "./Playmat.css";

const Playmat = (props: PlaymatProps) => {
  const { allCards, filter } = props;
  const showableCards = filter.length ? (
    allCards
      .filter((card) => card.name.toLowerCase().includes(filter.toLowerCase()))
      .map((card) => <Card card={card} key={card.code} />)
  ) : (
    allCards.map((card) => <Card card={card} key={card.code} />)
  );
  return (
    <div className="cards-dealer">
      {allCards.length ? (
        showableCards.length?
        showableCards : <p className="playmat-message">No cards to show</p>
      ) : (
        <p className="playmat-message">Loading cards</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  allCards: state.cards.cards,
  filter: state.cards.filter,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type PlaymatProps = PropsFromRedux;

export default connector(Playmat);
