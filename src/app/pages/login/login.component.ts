import { Component, inject, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  errorLogin = signal(false);
  cargando = signal(false);

  loginData: LoginData = {
    username: '',
    password: '',
  };

  createClassAndAnimation(div: HTMLDivElement) {
    window.document.body.appendChild(div);
    const loginButton = window.document.getElementById('loginButton');
    const position = loginButton?.getBoundingClientRect();
    div.className = `border-green-400 w-20 h-20 rounded-full aaa`;
    div.style.border = '20px solid rgb(34 197 94)';

    div.style.top = `${position?.top}px`;
    div.style.left = `${position?.left}px`;
    div.style.position = 'fixed';
    div.style.zIndex = '100';
    div.style.right = `${position?.right}px`;
    div.style.bottom = `${position?.bottom}px`;
    div.style.width = `${position?.width}px`;
    div.style.height = `${(position?.height ?? 0) + 40}px`;
  }

  login(loginForm: NgForm) {
    loginForm.form.markAllAsTouched();
    if (loginForm.invalid) {
      return;
    }

    this.cargando.set(true);
    this.errorLogin.set(false);
    this.authService
      .login(this.loginData)
      .then((res) => {
        if (res) {
          const div = window.document.createElement('div');
          this.createClassAndAnimation(div);

          setTimeout(() => {
            window.document.body.removeChild(div);
          }, 800);

          this.router.navigate(['/']);
        } else {
          this.errorLogin.set(true);
        }
        this.cargando.set(false);
      })
      .catch((error) => {
        this.errorLogin.set(true);
        this.cargando.set(false);
      });
  }

  clearError() {
    this.errorLogin.set(false);
  }
}
