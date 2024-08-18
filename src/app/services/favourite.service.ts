import { Injectable, Signal, WritableSignal, inject, signal } from '@angular/core';
import { API } from '../constants/api';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService extends ApiService {
  authService = inject(AuthService)

  currenciesId: WritableSignal<number[]> = signal([]);


  async index() {
    const res = await fetch(API+"favourite/" + this.userId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    })

    return await res.json();
  }

  async addToFavourite(id: number):Promise<string>{
    const res = await fetch(API+"favourite", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        Authorization: "Bearer " + localStorage.getItem('token')
      },
      body: JSON.stringify({
        "userId": this.userId,
        "currencyId": id
      })
    })
    const resJson = await res.json();
    return resJson;
  };

  async removeFromFavourite(id: number):Promise<string>{
    const res = await fetch(API+"favourite", {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json",
        Authorization: "Bearer " + localStorage.getItem('token')
      },
      body: JSON.stringify({
        "userId": this.userId,
        "currencyId": id
      })
    })
    const resJson = await res.json();
    return resJson;
  };

  async getCurrenciesId () {
    const response = await fetch(API+"Favourite/currencies-id/" + this.userId, {
      headers: {
        "Content-Type":"application/json",
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    })
    return await response.json();
  }


}
