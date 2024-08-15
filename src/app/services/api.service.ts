import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { API } from '../constants/api';
import { RequestOptions } from '../interfaces/requestOptions';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  auth = inject(AuthService);
  constructor() {}

  async customFetch(endpoint: string, body?: any, method?: string) {
    try {
      const res = await fetch(`${API}${endpoint}`, this.getOptions(body));

      if (res.status === 401) {
        this.auth.logOut();
      }

      return await res.json();
    } catch (error) {
      return error;
    }
  }

  getOptions(body?: any): RequestOptions {
    const options: RequestOptions = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
      options.headers['Content-Type'] = 'application/json';
    }

    return options;
  }
}
