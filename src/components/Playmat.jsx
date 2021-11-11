import { connect } from "react-redux";
import Card from "./Card";
import "./Playmat.css";

const Playmat = ({ allCards }) => {
    return <div className="cards-dealer">
        { allCards.length ?
            allCards.map(card =>
                <Card card={card} key={card.code} />
            )
            : <div>Loading cards</div>}
    </div>
};

const mapStateToProps = (state) => {
    return {
        allCards: state.cards.cards
    }
};

export default connect(mapStateToProps)(Playmat);