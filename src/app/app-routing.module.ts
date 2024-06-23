import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userWithoutLogIn } from './guards/userWithoutLogIn'; 
import { userLoggedIn } from './guards/userLoggedIn';

const routes: Routes = [
  {
    path: '',
    canActivate: [userLoggedIn],
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    data: { animation: 'routeAnimations' } 
  },
  {
    path: 'login',
    canActivate: [userWithoutLogIn],
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
    data: { animation: 'routeAnimations' } 
  },
  {
    path: 'register',
    canActivate: [userWithoutLogIn],
    loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterModule)
  },
  {
    path: 'contact/:id',
    canActivate: [userLoggedIn],
    loadChildren: () => import('./pages/contact/contact.module').then((m) => m.ContactModule)
  },
  {
    path: 'converter/:id',
    canActivate: [userLoggedIn],
    loadChildren: () => import('./pages/converter/converter.module').then((m) => m.ConverterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
