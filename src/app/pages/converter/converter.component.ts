import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/interfaces/currency';
import { FavouriteService } from 'src/app/services/favourite.service';
import { Router } from '@angular/router'; // Import the Router module

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  currencyService = inject(CurrencyService);
  favouriteService = inject(FavouriteService);
  router = inject(Router);

  currency: Currency = {
    id: 0,
    name: '',
    symbol: '',
    value: 0
  };

  ngOnInit(): void {
    this.fetchCurrency();
  }

  async fetchCurrency(){
    //id de la ruta
    // this.currency = await this.currencyService.getOne(this.router.url.queryParams['id'])
  }

  isFavorite(id: number): boolean {
    return this.favouriteService.currenciesId()?.some((currency: number) => currency === id) ?? false;
  }

  goToConverter(id: number): void {
    this.router.navigate(['/converter', id]);
  }
}
