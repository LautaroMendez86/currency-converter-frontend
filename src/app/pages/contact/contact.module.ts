import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { NuevoContactoComponent } from 'src/app/components/nuevo-contacto/nuevo-contacto.component';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    NuevoContactoComponent
  ]
})
export class ContactModule { }
