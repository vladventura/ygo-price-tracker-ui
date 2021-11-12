import { getCards } from "./store/actions/cardsActions";
import { connect, ConnectedProps } from "react-redux";
import { useEffect, useState } from "react";
import Playmat from "./components/Playmat";
import { Fab } from "./components/Fab";
import Modal from "./components/Modal";

const App = ({ getCards }: AppProps) => {
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


const mapDispatchToProps = (dispatch: Function) => {
  return {
    getCards: () => dispatch(getCards()),
  };
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type AppProps = PropsFromRedux;

export default connector(App);
