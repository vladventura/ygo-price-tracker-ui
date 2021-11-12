import { PostCardsEndpoint } from "../../interfaces/APISchema";
import { CardInterface } from "../../interfaces/CardInterface";
import { ADD_CARD, CardsActionTypes, GET_CARDS } from "../actions/actionTypes";
import { GetCardsAction } from "../actions/cardsActions";

export interface CardState {
    cards: CardInterface[]
}

export interface CardReducerAction {
    type: CardsActionTypes,
    payload: GetCardsAction | PostCardsEndpoint
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
        case ADD_CARD:
            return {
                ...state,
                cards: [...state.cards, (action.payload as PostCardsEndpoint).data]
            }
        default:
            return { ...state }
    }
};

export default cardsReducer;