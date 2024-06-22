import { Component, inject } from '@angular/core';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  favoritesService = inject(FavouriteService);

  ngOnInit(): void {
    this.getCurrenciesId();
  }
  
  async getCurrenciesId() {
    this.favoritesService.currenciesId.set(await this.favoritesService.getCurrenciesId());
  }
}