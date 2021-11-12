import axios from "axios";
import { Dispatch } from "react";
import {
  GetCardsEndpoint,
  PostCardsEndpoint,
} from "../../interfaces/APISchema";
import { CardState } from "../reducers/cardsReducer";
import { ADD_CARD, CardsActionTypes, GET_CARDS } from "./actionTypes";

const serverUrl = "http://localhost:5000";
const cardsEndpoint = "/cards";
const url = serverUrl + cardsEndpoint;

export interface GetCardsAction {
  type: CardsActionTypes;
  payload: GetCardsEndpoint;
}

export const getCards = () => {
  return (dispatch: Dispatch<GetCardsAction>, getState: () => CardState) => {
    return axios.get(url).then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_CARDS,
        payload: res.data,
      });
    });
  };
};

export interface AddCardAction {
  type: CardsActionTypes;
  payload: PostCardsEndpoint;
}

export const addCard = (code: string) => {
  return (dispatch: Dispatch<AddCardAction>, getState: () => CardState) => {
    return axios
      .post(url + "?cardCode=" + code)
      .then((res) => {
          dispatch({
              type: ADD_CARD,
              payload: res.data
          })
      })
      .catch((er) => {
        console.log(er);
      });
  };
};
