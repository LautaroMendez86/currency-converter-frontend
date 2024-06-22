import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CurrencyComponent } from '../currency/currency.component';
import { FavouriteCurrencyComponent } from '../favourite-currency/favourite-currency.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: CurrencyComponent,
      },
      {
        path: 'favourites',
        component: FavouriteCurrencyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
