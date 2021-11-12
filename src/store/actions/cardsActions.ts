import axios from "axios";
import { Dispatch } from "react";
import { GetCardsEndpoint } from "../../interfaces/APISchema";
import { CardState } from "../reducers/cardsReducer";
import { CardsActionTypes, GET_CARDS } from "./actionTypes";

const serverUrl = 'http://localhost:5000';
const cardsEndpoint = '/cards';

export interface GetCardsAction {
    type: CardsActionTypes,
    payload: GetCardsEndpoint
}

export interface GetCardsDispatch {
    getCards: () => GetCardsAction
}

export const getCards = () => {
    return (dispatch: Dispatch<GetCardsAction>, getState: () => CardState) => {
        const url = serverUrl + cardsEndpoint;
        return axios.get(url)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_CARDS,
                payload: res.data
            });
        });
    };
};