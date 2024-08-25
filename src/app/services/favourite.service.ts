import { Injectable, Signal, WritableSignal, inject, signal } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService extends ApiService {
  authService = inject(AuthService)
  currenciesId: WritableSignal<number[]> = signal([]);
  baseUrl: string = 'favourite';


  async index() {
    return await this.customFetch(`${this.baseUrl}/${this.auth.userId}`, 'GET');
  }

  async addToFavourite(id: number):Promise<string>{
    return await this.customFetch(`${this.baseUrl}`, 'POST', {
      "userId": this.auth.userId,
      "currencyId": id
    });
  };

  async removeFromFavourite(id: number):Promise<string>{
    return await this.customFetch(`${this.baseUrl}`, 'DELETE', {
      "userId": this.auth.userId,
      "currencyId": id
    });
  };

  async getCurrenciesId () {
    return await this.customFetch(`${this.baseUrl}/currencies-id/${this.auth.userId}`, 'GET');
  }


}
