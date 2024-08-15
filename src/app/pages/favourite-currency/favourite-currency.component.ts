import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Currency } from 'src/app/interfaces/currency';
import { CurrencyCardComponent } from "../../components/currency-card/currency-card.component";
import { CurrencyComponent } from '../currency/currency.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-favourite-currency',
  standalone: true,
  imports: [CommonModule, CurrencyCardComponent, ModalComponent],
  templateUrl: '../currency/currency.component.html',
  styleUrls: ['../currency/currency.component.scss']
})
export class FavouriteCurrencyComponent extends CurrencyComponent {
  override currencies:Currency[] = [];

  override ngOnInit(): void {
    this.fetchFavourites();
  }

  async fetchFavourites(){
    this.currencies = await this.favouriteService.index();
  }

}
