import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class HistoryService extends ApiService {
  apiService = inject(ApiService);
  baseUrl: string = 'ConverterHistory';

  async getHistory() {
    return await this.customFetch(`${this.baseUrl}/${this.userId}`, 'GET');
  }
}
