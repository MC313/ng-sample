import { Component, OnInit, Input } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Shoe } from '../../Shoe';
import { ShoeState } from '../../store/shoe.state';
import { selectAllShoes } from '../../store/shoe.selectors';
import * as ShoeActions from '../../store/shoe.actions';
import * as ShoeDetailsActions from '../../../shoe-details/store/shoe-details.actions';
import * as CartActions from '../../../cart/store/cart.actions';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})

export class ShoesComponent implements OnInit {

  constructor(private store$: Store<ShoeState>) { }

  @Input() animateSection: boolean;
  shoes$ = this.store$.pipe<Shoe[]>(select(selectAllShoes));

  ngOnInit() {
    this.store$.dispatch(new ShoeActions.LoadShoesRequest());
    this.store$.dispatch(new ShoeDetailsActions.HideShoeDetailsOverlay());
  }

  showDetails(shoeId: number) {
    this.store$.dispatch(new ShoeDetailsActions.ShowShoeDetailsOverlay(shoeId));
  }

  addToCart(shoe: Shoe) {
    const product = { ...shoe, quantity: 1 };
    this.store$.dispatch(new CartActions.AddProduct(product));
  }

}

