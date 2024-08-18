import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiService {
  apiService = inject(ApiService);
  baseUrl: string = 'User';

  async getUser(): Promise<User> {
    return await this.apiService.customFetch(`${this.baseUrl}/${this.userId}`, 'GET');
  }

  async update(user: User): Promise<User> {
    return await this.apiService.customFetch(`${this.baseUrl}`, 'PUT', user);
  }
}
