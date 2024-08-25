import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { API } from '../constants/api';
import { Method, RequestOptions } from '../interfaces/requestOptions';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  auth = inject(AuthService);

  async customFetch(endpoint: string, method: Method, body?: any) {
    try {
      const res = await fetch(`${API}${endpoint}`, this.getOptions(method, body));

      if (res.status === 401) {
        this.auth.logOut();
      }

      return await res.json();
    } catch (error) {
      return error;
    }
  }

  getOptions(method: Method, body?: any): RequestOptions {
    const options: RequestOptions = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      method: method
    };

    if (body) {
      options.body = JSON.stringify(body);
      options.headers['Content-Type'] = 'application/json';
    }

    return options;
  }
}
