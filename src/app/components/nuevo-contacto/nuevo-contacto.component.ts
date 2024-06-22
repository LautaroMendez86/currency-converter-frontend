import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-nuevo-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.scss']
})
export class NuevoContactoComponent {
  contactsService = inject(ContactsService);

  @Output() cerrar = new EventEmitter();
  @Output() refresh = new EventEmitter();

  @Input() contacto:Contact = {
    id: 0,
    name: '',
    lastName: '',
    address: '',
    email: '',
    image: '',
    number: '',
    company: '',
    userId: 0
  }
  
  async onSubmit(){
    this.contacto.id ? this.editarContacto() : this.agregarContacto();

  }

  async agregarContacto(){
    const res = await this.contactsService.create(this.contacto);
    this.cerrar.emit();
    this.refresh.emit();
    
  }

  async editarContacto(){
    const res = await this.contactsService.edit(this.contacto);
    this.cerrar.emit();
    this.refresh.emit();

  }

}
