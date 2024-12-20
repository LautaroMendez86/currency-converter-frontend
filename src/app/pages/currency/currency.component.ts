import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/interfaces/currency';
import { CurrencyCardComponent } from "../../components/currency-card/currency-card.component";
import { FavouriteService } from 'src/app/services/favourite.service';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-currencies',
    standalone: true,
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss'],
    imports: [CommonModule, FormsModule, CurrencyCardComponent, ModalComponent]
})

export class CurrencyComponent implements OnInit {
  currencyService = inject(CurrencyService);
  favouriteService = inject(FavouriteService);
  router = inject(Router);

  showModal: boolean = false;
  amount: number = 0;
  result: number | null = null;
  currencies:Currency[] = [];

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
    this.result = null;
    this.amount = 0;
  }
  openModal () {
    this.showModal = true;
  }
  async convert() {
    try {
        const [from, to] = this.currencyService.currenciesToConvert;
        const response = await this.currencyService.convert(
            from.id,
            to.id,
            this.amount
        );

        if (response.success) {
            this.result = response.result;
        } else {
            alert(response.message);
        }
    } catch (error) {
        console.error("Error en la conversión:", error);
        alert("Ocurrió un error inesperado durante la conversión.");
    }
}


  canConvert () {
    return this.currencyService.currenciesToConvert.length === 2
  }
}
