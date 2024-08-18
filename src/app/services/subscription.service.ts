import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { Subscription } from '../interfaces/subscription';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService extends ApiService {
  apiService = inject(ApiService);
  baseUrl: string = 'Subscription';

  async index(): Promise<Subscription[]> {
    return await this.apiService.customFetch(this.baseUrl, 'GET');
  }
}
