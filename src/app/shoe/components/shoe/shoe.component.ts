import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Shoe } from '../../Shoe';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.scss']
})
export class ShoeComponent {
  constructor() { }

  @Input() shoeInfo: Shoe;
  @Output() showDetails = new EventEmitter<number>();

  showShoeDetails(shoe: Shoe) {
    this.showDetails.emit(shoe.id);
  }

}
