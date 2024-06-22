import { FavouriteService } from 'src/app/services/favourite.service';
import { Component, Input, inject } from '@angular/core';
import { Currency } from 'src/app/interfaces/currency';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class CurrencyCardComponent {
    favouriteService = inject(FavouriteService);

    @Input() currency!: Currency;
    @Input() isFavourite!: boolean;

    addToFavourite (currencyId: number) {
      this.favouriteService.addToFavourite(currencyId)
      this.favouriteService.currenciesId().push(currencyId)
    }

    removeFromFavourite (currencyId: number) {
      this.favouriteService.removeFromFavourite(currencyId)
      this.favouriteService.currenciesId.set(this.favouriteService.currenciesId().filter(id => id !== currencyId))
    }
}
