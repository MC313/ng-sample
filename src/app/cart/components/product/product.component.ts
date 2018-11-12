import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../Product';

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
})

export class ProductComponent implements OnInit {
    constructor() { }

    @Input('productInfo') product: Product;
    @Output() removeFromCart = new EventEmitter<Product>();


    ngOnInit() { }

    removeProductFromCart(product: Product) {
        this.removeFromCart.emit(product);
    }
}