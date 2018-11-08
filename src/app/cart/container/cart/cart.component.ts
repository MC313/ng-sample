import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { CartState } from '../../store/cart.state';
import * as CartActions from '../../store/cart.actions';
import { selectProductsInCart, selectProductsTotalPrice } from '../../store/cart.selectors';

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {
    constructor(private store$: Store<CartState>) { }

    @Output() toggleCart: EventEmitter<boolean> = new EventEmitter();
    products$ = this.store$.pipe(select(selectProductsInCart));
    totalPrice$ = this.store$.pipe(select(selectProductsTotalPrice));

    ngOnInit() {
        this.store$.dispatch(new CartActions.LoadCartAction);
    }

    showHideCartProducts() {
        this.toggleCart.emit();
    }
}