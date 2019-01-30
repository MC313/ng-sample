import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { DetailsComponent } from './details.component';
import { reducer } from './store/shoe-details.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('shoeDetails', reducer),
    ],
    declarations: [
        DetailsComponent
    ],
    exports: [
        DetailsComponent
    ]
})
export class ShoeDetailsModule { }
