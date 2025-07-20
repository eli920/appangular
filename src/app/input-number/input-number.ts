import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-input-number',
  standalone: false,
  templateUrl: './input-number.html',
  styleUrls: ['./input-number.scss']
})

export class InputNumber {

  constructor() { }

// Comunicacion entre componentes @input y @output
  @Input() quantity!: number;
  @Input() max!: number;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maxReached: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {

  }

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity); //Acá emitimos el evento (me conecta los paréntisis)
    } else {
      this.maxReached.emit("supera el stock");
    }

  }

  downQuantity(): void {
    if (this.quantity > 0)
      this.quantity--;
    this.quantityChange.emit(this.quantity);
  }

  modifyQuantity(event: Event): void {

    if (this.quantity > this.max) {
      alert('No hay suficientes productos en stock!');
      this.quantity = this.max;
    } else {
      this.quantity = this.quantity;
    }

    this.quantityChange.emit(this.quantity);

  }

  blockNonNumeric(event: KeyboardEvent): void {
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  }

}
