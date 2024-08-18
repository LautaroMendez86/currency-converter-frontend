import { Subscription } from './subscription';

export interface RegisterData {
  username: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  subscriptionId: number;
  subscription: Subscription;
  favourites: any;
}

export interface LoginData {
  username: string;
  password: string;
}
