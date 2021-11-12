import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "../store/reducers/rootReducer";
import Card from "./Card";
import "./Playmat.css";

const Playmat = (props: PlaymatProps) => {
  const { allCards } = props;
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

const mapStateToProps = (state: StoreState) => ({
  allCards: state.cards.cards,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type PlaymatProps = PropsFromRedux;

export default connector(Playmat);
