import { Currency } from "./currency"

export interface History {
  id: number
  amount: number
  result: number
  date: string
  userId: number
  user: any
  currencyToId: number
  currencyTo: Currency
  currencyFromId: number
  currencyFrom: Currency
}

