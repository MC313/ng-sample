import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ShoesComponent } from './container/shoes/shoes.component';
import { ShoeComponent } from './components/shoe/shoe.component';
import { reducer } from './store/shoe.reducer';
import { ShoeEffects } from './store/shoe.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('shoe', reducer),
    EffectsModule.forFeature([ShoeEffects]),
  ],
  declarations: [
    ShoesComponent,
    ShoeComponent
  ],
  exports: [
    ShoesComponent
  ]
})
export class ShoeModule { }
