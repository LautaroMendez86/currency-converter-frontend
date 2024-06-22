import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Currency } from 'src/app/interfaces/currency';
import { CurrencyCardComponent } from "../../components/currency-card/currency-card.component";
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-favourite-currency',
  standalone: true,
  imports: [CommonModule, CurrencyCardComponent],
  templateUrl: './favourite-currency.component.html',
  styleUrls: ['./favourite-currency.component.scss']
})
export class FavouriteCurrencyComponent {
  favouriteService = inject(FavouriteService);
  currencies:Currency[] = [];

  ngOnInit(): void {
    this.fetchFavourites();
  }

  async fetchFavourites(){
    this.currencies = await this.favouriteService.index();
  }

  isFavorite(id: number): boolean {
    return this.favouriteService.currenciesId()?.some(currency => currency === id) ?? false;
  }
}
