import { getCards } from "./store/actions/cardsActions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Playmat from "./components/Playmat";
import { Fab } from "./components/Fab";
import Modal from "./components/Modal";
const App = ({ getCards }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getCards();
  }, [getCards]);

  return (
    <div className="App">
      <Playmat />
      <Fab onClick={() => setShowModal(true)} />
      <Modal onClose={() => setShowModal(false)} show={showModal}>
          <p>Hello</p>
      </Modal>
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
