import { Component, WritableSignal, inject, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterData } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  authService = inject(AuthService)
  router = inject(Router);
  errorRegister: WritableSignal<boolean> = signal(false)
  cargando = signal(false);

  registerData: RegisterData = {
    username: "",
    email: "",
    password: "",
  }

  async register(registerForm:NgForm){

    registerForm.form.markAllAsTouched();
    if (registerForm.invalid) {
      return;
    }

    this.errorRegister.set(false);
    this.cargando.set(true);
    try{
      const res = await this.authService.register(this.registerData);
      if(res.ok) {
        await this.authService.login(this.registerData);
        this.router.navigate(["/subscription"]);
      }
      else {
        this.errorRegister.set(true);
      }
    } catch(err) {
      console.warn('Error registrando', err)
    }
    this.cargando.set(false);
  }
}
