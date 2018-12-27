import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ShopRoutingModule } from './shop-routing.module';
import { CartModule } from '../cart/cart.module';
import { ShoeModule } from '../shoe/shoe.module';
import { ShopComponent } from './shop.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShopRoutingModule,
    CartModule,
    ShoeModule

  ],
  declarations: [
    ShopComponent
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
