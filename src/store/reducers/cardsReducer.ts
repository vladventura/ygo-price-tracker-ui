import { CardInterface } from "../../interfaces/CardInterface";
import {
  ADD_CARD,
  GET_CARDS,
  REFRESH_CARD,
  SEARCH_CARD,
} from "../actions/actionTypes";
import {
  AddCardAction,
  GetCardsAction,
  RefreshCardAction,
  SearchCardAction,
} from "../actions/cardsActions";

export interface CardState {
  cards: CardInterface[];
  filter: string;
}

export type CardReducerAction =
  | GetCardsAction
  | AddCardAction
  | SearchCardAction;

const initState: CardState = {
  cards: [],
  filter: "",
};

const cardsReducer = (state = initState, action: CardReducerAction) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, (action as AddCardAction).payload.data],
      };
    case SEARCH_CARD:
      return {
        ...state,
        filter: (action as SearchCardAction).payload,
      };
    case REFRESH_CARD:
      return {
        ...state,
        cards: action.payload,
      };
    default:
      return { ...state };
  }
};

export default cardsReducer;
