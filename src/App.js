import { getCards } from "./store/actions/cardsActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import Playmat from "./components/Playmat";
import { Fab } from "./components/Fab";
const App = (props) => {
  const { getCards } = props;

  useEffect(() => {
    getCards();
  }, [getCards]);

  return (
    <div className="App">
      <Playmat />
      <Fab onClick={() => {}}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allCards: state.cards.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => dispatch(getCards()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
