import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Store } from '@ngrx/store';

import { OverlayState } from './OverlayState';
import { Shoe } from '../shoe/Shoe';
import * as CartActions from '../cart/store/cart.actions';
import * as ShoeDetailsActions from './store/shoe-details.actions';
import { ShoeDetailsState } from './store/shoe-details.state';


@Component({
  selector: 'shoe-details',
  templateUrl: './details.component.html',
  animations: [
    trigger('showHideContainer', [
      state('show', style({
        display: 'block',
        visibility: 'visible',
        opacity: 1
      })),
      state('hide', style({
        display: 'none',
        visibility: 'hidden',
        opacity: 0
      })),
      transition(':enter', [
        animate('0.7s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.4s 1.4s', style({ opacity: 0 }))
      ]),
    ]),
    trigger('showHideBackdrop', [
      state('show', style({
        opacity: '0.75'
      })),
      state('hide', style({
        opacity: '0'
      })),
      transition(':enter', [
        animate('0.2s 0.5s')
      ]),
      transition(':leave', [
        animate('0.4s 0.8s')
      ]),
    ]),
    trigger('showHideDetails', [
      state('show', style({
        transform: 'translateX(0%)'
      })),
      state('hide', style({
        transform: 'translateX(110%)'
      })),
      transition(':enter', [
        animate('0.4s 0.8s')
      ]),
      transition(':leave', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class DetailsComponent {

  constructor(private store$: Store<ShoeDetailsState>) { }

  @Input() details: Shoe;
  @Input() overlayState: OverlayState;

  hideDetails(event) {
    this.store$.dispatch(new ShoeDetailsActions.HideShoeDetailsOverlay());
  }

  addToCart(shoe: Shoe) {
    const product = { ...shoe, quantity: 1 };
    this.store$.dispatch(new CartActions.AddProduct(product));
  }

  close() {
    this.overlayState = 'HIDDEN';
  }

}
