import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: []
})
export class ModalComponent {
  @Input() isVisible: boolean = true;

  closeModal() {
    this.isVisible = false;
  }
}