import { GET_CARDS } from "../actions/actionTypes";

const initState = {
    cards: []
};

const cardsReducer = (state = initState, action) => {
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