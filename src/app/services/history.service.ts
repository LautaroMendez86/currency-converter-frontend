import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HistoryService extends ApiService {
  apiService = inject(ApiService);
  authService = inject(AuthService);
  baseUrl: string = 'ConverterHistory';

  async getHistory() {
    return await this.customFetch(`${this.baseUrl}/${this.auth.userId}`, 'GET');
  }
}
