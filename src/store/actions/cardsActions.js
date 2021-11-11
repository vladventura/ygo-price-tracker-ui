import axios from "axios";
import { GET_CARDS } from "./actionTypes";

const serverUrl = 'http://localhost:5000';
const cardsEndpoint = '/cards';

export const getCards = () => {
    return (dispatch, getState) => {
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