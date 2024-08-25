import { Injectable, Signal, WritableSignal, inject, signal } from '@angular/core';
import { API } from '../constants/api';
import { LoginData, RegisterData } from '../interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(){
    const token = localStorage.getItem('token');
    if(token) this.token.set(jwtDecode(token));
  }
  router = inject(Router);
  token: WritableSignal<string | null> = signal(null);
  user = signal(null);

  async login(loginData:LoginData){
    try{
      const res = await fetch(API+"auth/authenticate", {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(loginData)
      })
      if(!res.ok) return false;
      const tokenRecibido = await res.text();
      localStorage.setItem("token",tokenRecibido);
      this.token.set(jwtDecode(tokenRecibido));
      return true;
    }
    catch{
      return false
    }
  }

  async register(registerData: RegisterData){
    const res = await fetch( API + "User", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(registerData)
    });
    return res;
  }

  logOut(){
    this.token.set(null);
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
}
