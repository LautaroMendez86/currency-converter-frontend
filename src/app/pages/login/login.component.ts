import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authService = inject(AuthService)
  router = inject(Router);
  errorLogin = signal(false);
  cargando = signal(false);

  loginData: LoginData= {
    username:"",
    password: ""
  }

  createClassAndAnimation(div: HTMLDivElement){
    window.document.body.appendChild(div);
    
    const loginButton = window.document.getElementById("loginButton")
    console.log(loginButton?.getBoundingClientRect())
    const tuki = loginButton?.getBoundingClientRect()
    div.className = `border-green-400 w-20 h-20 rounded-full aaa`
    div.style.border = "20px solid rgb(34 197 94)";

    div.style.top = `${tuki?.top}px`;
    div.style.left = `${tuki?.left}px`;
    div.style.position = "fixed";
    div.style.zIndex = "100";
    div.style.right = `${tuki?.right}px`;
    div.style.bottom = `${tuki?.bottom}px`; 
    div.style.width = `${tuki?.width}px`;
    div.style.height = `${(tuki?.height ?? 0) + 40}px`;
  }

  login(){

    // this.router.navigate(["/register"])
    

    this.errorLogin.set(false);
    this.cargando.set(true);
    this.authService.login(this.loginData).then(res => {
      if(res) {
        const div = window.document.createElement("div");
        this.createClassAndAnimation(div);
    
        
        setTimeout(() => {
          window.document.body.removeChild(div);
        }, 800);
      this.router.navigate(["/"]);
      }
      else {
        this.errorLogin.set(true)
      };
      this.cargando.set(false);
    });
  }
}
