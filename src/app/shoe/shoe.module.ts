import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ShoeRoutingModule } from './shoe-routing.module';
import { ShoesComponent } from './container/shoes/shoes.component';
import { ShoeComponent } from './components/shoe/shoe.component';
import { ShoeDetailsComponent } from './components/shoe-details/shoe-details.component';
import { reducer } from './store/shoe.reducer';
import { ShoeEffects } from './store/shoe.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('shoe', reducer),
    EffectsModule.forFeature([ShoeEffects]),
    ShoeRoutingModule
  ],
  declarations: [
    ShoesComponent,
    ShoeComponent,
    ShoeDetailsComponent
  ],
  exports: [
    ShoesComponent
  ]
})
export class ShoeModule { }
