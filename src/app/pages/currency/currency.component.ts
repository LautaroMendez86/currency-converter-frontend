import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/interfaces/currency';
import { CurrencyCardComponent } from "../../components/currency-card/currency-card.component";
import { FavouriteService } from 'src/app/services/favourite.service';
import { Router } from '@angular/router'; // Import the Router module
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
    selector: 'app-currencies',
    standalone: true,
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss'],
    imports: [CommonModule, CurrencyCardComponent, ModalComponent]
})

export class CurrencyComponent implements OnInit {
  currencyService = inject(CurrencyService);
  favouriteService = inject(FavouriteService);
  router = inject(Router);
  
  showModal: boolean = false;
  currency1: number = 0;
  currency2: number = 0;
  result: number | null = null;  currencies:Currency[] = [];

  ngOnInit(): void {
    this.fetchCurrencies();
  }

  async fetchCurrencies(){
    this.currencies = await this.currencyService.getAll()
  }

  isFavorite(id: number): boolean {
    return this.favouriteService.currenciesId()?.some((currency: number) => currency === id) ?? false;
  }

  goToConverter(id: number): void {
    this.router.navigate(['/converter', id]);
  }

  isSelected(id: number): boolean {
    return this.currencyService.currenciesToConvert.some((currency: Currency) => currency.id === id) ?? false;
  }
  closeModal () {
    this.showModal = false;
  }
  openModal () {
    this.showModal = true;
  }

  convert() {
    // Aquí deberías implementar la lógica real de conversión de moneda.
    // Por ahora, asumamos una tasa de conversión simple.
    const conversionRate = 1.2; // Esta es una tasa de conversión ficticia.
    this.result = this.currency1 * conversionRate;
    this.currency2 = this.result;
  }

  canConvert () {
    return this.currencyService.currenciesToConvert.length === 2
  }
}
