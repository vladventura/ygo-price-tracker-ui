import { CardInterface } from "../../interfaces/CardInterface";
import { CardsActionTypes, GET_CARDS } from "../actions/actionTypes";
import { GetCardsAction } from "../actions/cardsActions";

export interface CardState {
    cards: CardInterface[]
}

export interface CardReducerAction {
    type: CardsActionTypes,
    payload: GetCardsAction
};

const initState: CardState = {
    cards: []
};


const cardsReducer = (state = initState, action: CardReducerAction) => {
    switch(action.type){
        case GET_CARDS:
            return {
                ...state,
                cards: action.payload
            }
        default:
            return { ...state }
    }
};

export default cardsReducer;