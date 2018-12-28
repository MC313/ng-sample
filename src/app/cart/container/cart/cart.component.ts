import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { CartState } from '../../store/cart.state';
import * as CartActions from '../../store/cart.actions';
import { selectProductsInCart, selectProductsTotalPrice } from '../../store/cart.selectors';
import { Product } from '../../Product';

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {
    constructor(private store$: Store<CartState>) { }

    @Output() toggleCart = new EventEmitter<boolean>();

    products$ = this.store$.pipe<Product[]>(select(selectProductsInCart));
    totalPrice$ = this.store$.pipe<number>(select(selectProductsTotalPrice));

    ngOnInit() {
        // This may not be needed
        // LoadCart action seems uneccessary
        this.store$.dispatch(new CartActions.LoadCart());
    }

    removeFromCart(product: Product) {
        this.store$.dispatch(new CartActions.RemoveProduct(product));
    }

    showHideCart() {
        this.toggleCart.emit();
    }
}