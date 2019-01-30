import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Shoe } from '../../Shoe';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.scss']
})
export class ShoeComponent implements OnInit {
  constructor() { }

  @Input() shoeInfo: Shoe;
  @Output() addToCart = new EventEmitter<Shoe>();
  @Output() showDetails = new EventEmitter<number>();

  ngOnInit() { }

  addShoeToCart(shoe: Shoe) {
    this.addToCart.emit(shoe);
  }

  showShoeDetails(shoe: Shoe) {
    this.showDetails.emit(shoe.id);
  }

}
