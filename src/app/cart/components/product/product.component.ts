import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../Product';

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
})

export class ProductComponent implements OnInit {
    constructor() { }

    @Input('productInfo') product: Product;
    @Output() removeProduct = new EventEmitter<Product>();


    ngOnInit() { }

    remove(product: Product) {
        this.removeProduct.emit(product);
    }
}