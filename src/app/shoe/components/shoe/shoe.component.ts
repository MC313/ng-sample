import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Shoe } from '../../Shoe';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.scss']
})
export class ShoeComponent implements OnInit {

  @Input() shoeInfo: Shoe;
  @Output() addToCart: EventEmitter<Shoe> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  addShoeToCart(shoe: Shoe) {
    this.addToCart.emit(shoe);
  }

}
