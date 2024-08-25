import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { Currency } from '../interfaces/currency';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService extends ApiService {
  currenciesToConvert: Currency[] = [];
  apiService = inject(ApiService);
  authService = inject(AuthService);
  baseUrl: string = 'Currency';

  async getAll(): Promise<Currency[]> {
    return await this.apiService.customFetch(this.baseUrl, 'GET');
  }

  async convert(fromCurrency: number, toCurrency: number, amount: number): Promise<{ success: boolean, result: number, message: string }> {
    return await this.apiService.customFetch(`${this.baseUrl}/convert`, 'POST', {
      fromCurrency,
      toCurrency,
      amount,
      userId: this.auth.userId
    })
  }
}
