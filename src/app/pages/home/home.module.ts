import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NuevoContactoComponent } from 'src/app/components/nuevo-contacto/nuevo-contacto.component';
import { CurrencyCardComponent } from "../../components/currency-card/currency-card.component";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NuevoContactoComponent,
        CurrencyCardComponent
    ]
})
export class HomeModule { }
