import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../interfaces/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiService {
  apiService = inject(ApiService);
  authService = inject(AuthService);
  baseUrl: string = 'User';

  async getUser(): Promise<User> {
    return await this.apiService.customFetch(`${this.baseUrl}/${this.auth.userId}`, 'GET');
  }

  async update(user: User): Promise<User> {
    return await this.apiService.customFetch(`${this.baseUrl}`, 'PUT', user);
  }
}
