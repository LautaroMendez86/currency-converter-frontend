import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/interfaces/currency';
import { CurrencyCardComponent } from "../../components/currency-card/currency-card.component";
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
    selector: 'app-currencies',
    standalone: true,
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss'],
    imports: [CommonModule, CurrencyCardComponent]
})
export class CurrencyComponent implements OnInit {
  currencyService = inject(CurrencyService);
  favouriteService = inject(FavouriteService);

  currencies:Currency[] = [];

  ngOnInit(): void {
    this.fetchCurrencies();
  }

  async fetchCurrencies(){
    this.currencies = await this.currencyService.getAll()
  }

  isFavorite(id: number): boolean {
    return this.favouriteService.currenciesId()?.some(currency => currency === id) ?? false;
  }
}
