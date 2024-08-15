import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { Currency } from '../interfaces/currency';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService extends ApiService {
  currenciesToConvert: Currency[] = [];
  apiService = inject(ApiService);
  baseUrl: string = 'Currency';

  async getAll(): Promise<Currency[]> {
    return await this.apiService.customFetch(this.baseUrl);
  }

  async getOne(id: number): Promise<Currency[]> {
    return await this.apiService.customFetch(`${this.baseUrl}/${id}`);
  }
}
