import axios from "axios";
import { Dispatch } from "react";
import {
  GetCardsEndpoint,
  PostCardsEndpoint,
} from "../../interfaces/APISchema";
import { CardInterface } from "../../interfaces/CardInterface";
import { CardState } from "../reducers/cardsReducer";
import { StoreState } from "../reducers/rootReducer";
import {
  ADD_CARD,
  CardsActionTypes,
  GET_CARDS,
  REFRESH_CARD,
  SEARCH_CARD,
} from "./actionTypes";

const serverUrl = "http://localhost:5000";
const cardsEndpoint = "/cards";
const url = serverUrl + cardsEndpoint;

interface CardAction<T> {
  type: CardsActionTypes;
  payload: T;
}

export type GetCardsAction = CardAction<GetCardsEndpoint>;
export type AddCardAction = CardAction<PostCardsEndpoint>;
export type RefreshCardAction = CardAction<CardInterface[]>;
export type SearchCardAction = CardAction<string>;

export const getCards = () => {
  return (dispatch: Dispatch<GetCardsAction>, getState: () => CardState) => {
    return axios.get(url).then((res) => {
      dispatch({
        type: GET_CARDS,
        payload: res.data,
      });
    });
  };
};

export const addCard = (code: string) => {
  return (dispatch: Dispatch<AddCardAction>, getState: () => StoreState) => {
    return axios
      .post(url + "?cardCode=" + code)
      .then((res) => {
        dispatch({
          type: ADD_CARD,
          payload: res.data,
        });
      })
      .catch((er) => {
        console.log(er);
      });
  };
};

export const searchCard = (cardName: string) => {
  return (dispatch: Dispatch<SearchCardAction>, getState: () => StoreState) => {
    dispatch({
      type: SEARCH_CARD,
      payload: cardName,
    });
  };
};

export const refreshCard = (code: string | number) => {
  return (
    dispatch: Dispatch<RefreshCardAction>,
    getState: () => StoreState
  ) => {
    axios
      .patch(url + "?cardCode=" + code)
      .then((res) => {
        const data = res.data.data;
        const state = getState();
        const cards = [
          ...state.cards.cards.map((card) => {
            if (card.code === code) card = { ...data };
            return card;
          }),
        ];
        dispatch({
          type: REFRESH_CARD,
          payload: cards,
        });
      })
      .catch((er) => {
        console.log(er);
      });
  };
};
