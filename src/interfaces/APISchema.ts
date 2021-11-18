import { CardInterface } from "./CardInterface";

export type GetCardsEndpoint = CardInterface[];

type Endpoint = {
  data?: CardInterface;
  message: string;
};

export type PostCardsEndpoint = Endpoint;

export type PatchCardEndpoint = Endpoint;
