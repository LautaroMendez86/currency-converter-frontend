import { Injectable, inject } from '@angular/core';
import { API } from '../constants/api';
import { ApiService } from './api.service';
import { Currency } from '../interfaces/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends ApiService {

  currenciesToConvert: Currency[] = [];
  
  async getAll():Promise<Currency[]>{
    const res = await fetch(API+"Currency")
    const resJson = await res.json();
    return resJson;
  };

  async getOne(id: number):Promise<Currency[]>{
    const res = await fetch(API+"Currency/"+id)
    const resJson = await res.json();
    return resJson;
  };
  

}
