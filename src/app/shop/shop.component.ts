import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { combineLatest, zip } from 'rxjs';

import { OverlayState } from '../shoe-details/OverlayState';
import { ShoeDetailsState } from '../shoe-details/store/shoe-details.state';
import { selectShoeDetails, selectDetailsOverlayState } from '../shoe-details/store/shoe-details.selectors';
import { Shoe } from '../shoe/Shoe';

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html'
})

export class ShopComponent implements OnInit {
    constructor(private store$: Store<ShoeDetailsState>) { }

    animateShoesContainer: boolean = false;
    detailsInfo$ = zip(
        this.store$.pipe<OverlayState>(select(selectDetailsOverlayState)),
        this.store$.pipe<Shoe>(select(selectShoeDetails))
    );
    overlayState: OverlayState;
    selectedShoe: Shoe;

    ngOnInit() {
        this.detailsInfo$.subscribe(([overlayState, selectedShoe]) => {
            this.overlayState = overlayState;
            this.selectedShoe = selectedShoe;
        });
    }

    showHideCartProducts($event) {
        this.animateShoesContainer = this.animateShoesContainer === false ? true : false;
    }
}