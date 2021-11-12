import { combineReducers } from "redux";
import cardsReducer, { CardState } from "./cardsReducer";


export interface StoreState {
    cards: CardState
}

const rootReducer = combineReducers({
    cards: cardsReducer
});

export default rootReducer;