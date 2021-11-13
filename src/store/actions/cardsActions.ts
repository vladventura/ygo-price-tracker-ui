import axios from "axios";
import { Dispatch } from "react";
import {
  GetCardsEndpoint,
  PostCardsEndpoint,
} from "../../interfaces/APISchema";
import { CardState } from "../reducers/cardsReducer";
import {
  ADD_CARD,
  CardsActionTypes,
  GET_CARDS,
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
export type SearchCardAction = CardAction<string>;

export const getCards = () => {
  return (
    dispatch: Dispatch<GetCardsAction>,
    getState: () => CardState
  ) => {
    return axios.get(url).then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_CARDS,
        payload: res.data,
      });
    });
  };
};

export const addCard = (code: string) => {
  return (dispatch: Dispatch<AddCardAction>, getState: () => CardState) => {
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
  return (dispatch: Dispatch<SearchCardAction>, getState: () => CardState) => {
    dispatch({
      type: SEARCH_CARD,
      payload: cardName,
    });
  };
};
