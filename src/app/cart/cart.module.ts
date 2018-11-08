import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { CartComponent } from './container/cart/cart.component';

import { ProductComponent } from './components/product/product.component';
import { TotalPriceComponent } from './components/total-price/total-price.component';
import { reducer } from './store/cart.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('cart', reducer),
    ],
    declarations: [
        CartComponent,
        ProductComponent,
        TotalPriceComponent
    ],
    exports: [
        CartComponent
    ]
})
export class CartModule { }
