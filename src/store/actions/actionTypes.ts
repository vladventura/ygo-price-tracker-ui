export const GET_CARDS = "GET_CARDS";
export const ADD_CARD = "ADD_CARD";
export const SEARCH_CARD = "SEARCH_CARD";
export const REFRESH_CARD = "REFRESH_CARD";

export type CardsActionTypes =
  | typeof GET_CARDS
  | typeof ADD_CARD
  | typeof SEARCH_CARD
  | typeof REFRESH_CARD;
