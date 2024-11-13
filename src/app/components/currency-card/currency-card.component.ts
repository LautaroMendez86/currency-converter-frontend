import { FavouriteService } from 'src/app/services/favourite.service';
import { Component, Input, inject } from '@angular/core';
import { Currency } from 'src/app/interfaces/currency';

import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
  imports: [],
  standalone: true
})
export class CurrencyCardComponent {
    favouriteService = inject(FavouriteService);
    currencyService = inject(CurrencyService);

    @Input() currency!: Currency;
    @Input() isFavourite!: boolean;
    @Input() isSelected!: boolean;

    addToFavourite (currencyId: number) {
      this.favouriteService.addToFavourite(currencyId)
      this.favouriteService.currenciesId().push(currencyId)
    }

    removeFromFavourite (currencyId: number) {
      this.favouriteService.removeFromFavourite(currencyId)
      this.favouriteService.currenciesId.set(this.favouriteService.currenciesId().filter(id => id !== currencyId))
    }

    addToSelectedCurrencies (currency: Currency) {
      if (this.currencyService.currenciesToConvert.length >= 2) {
        return
      }

      this.currencyService.currenciesToConvert.push(currency)
    }

    removeFromSelectedCurrencies (currency: Currency) {
      this.currencyService.currenciesToConvert = this.currencyService.currenciesToConvert.filter((c: Currency) => c.id !== currency.id)
    }

    getPosition (id: Number) {
      return this.currencyService.currenciesToConvert.findIndex((c: Currency) => c.id === id) + 1
    }
}
