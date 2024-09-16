export interface CoinObj {
  name: string;
  img: string;
}

export interface Invoices {
  TO: string;
  TRANSACTION: number;
  DATE: string;
  TIME: string;
  COIN: CoinObj;
  AMOUNT: number;
  STATUS: string;
}
