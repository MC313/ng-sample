import { Component, OnInit, Input } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { ShoeState } from '../../store/shoe.state';
import { Shoe } from '../../Shoe';
import * as ShoeActions from '../../store/shoe.actions';
import * as CartActions from '../../../cart/store/cart.actions';
import { selectAllShoes } from '../../store/shoe.selectors';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {

  constructor(private store$: Store<ShoeState>) { }

  @Input() animateSection: boolean;
  shoes$ = this.store$.pipe(select(selectAllShoes));

  ngOnInit() {
    this.store$.dispatch(new ShoeActions.LoadShoesRequestAction());
  }

  addToCart(shoe: Shoe) {
    const product = { ...shoe, quantity: 1 };
    this.store$.dispatch(new CartActions.AddProduct(product));
  }

}
