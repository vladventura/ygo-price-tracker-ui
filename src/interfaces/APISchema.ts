import { CardInterface } from "./CardInterface";

export type GetCardsEndpoint = CardInterface[];

export interface PostCardsEndpoint {
    data?: CardInterface,
    message: string 
};