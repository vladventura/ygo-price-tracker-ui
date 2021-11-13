import { addCard, getCards, searchCard } from "./store/actions/cardsActions";
import { connect, ConnectedProps } from "react-redux";
import { useEffect, useState } from "react";
import Playmat from "./components/Playmat";
import { Fab } from "./components/Fab";
import Modal from "./components/Modal";
import Searchbar from "./components/Searchbar";

const App = ({ getCards, addCard, searchCard }: AppProps) => {
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState("");

  useEffect(() => {
    getCards();
  }, [getCards]);

  const addCardOnClick = () => {
    addCard(code);
    setShowModal(false);
  };

  return (
    <div className="App">
      <Searchbar onSearchChange={searchCard} />
      <Playmat />
      <Fab onClick={() => setShowModal(true)} />
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        header="Add card by code"
      >
        <div className="modal-code-input">
          <input value={code} onChange={(e) => setCode(e.target.value)} />
          <button onClick={addCardOnClick}>Add card</button>
        </div>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getCards: () => dispatch(getCards()),
    addCard: (code: string) => dispatch(addCard(code)),
    searchCard: (cardName: string) => dispatch(searchCard(cardName))
  };
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type AppProps = PropsFromRedux;

export default connector(App);
