import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { Shoe } from '../Shoe';
import { ShoeService } from '../shoe.service';
import * as ShoeActions from './shoe.actions';

@Injectable()
export class ShoeEffects {

    constructor(
        private shoeService: ShoeService,
        private actions$: Actions
    ) { }

    @Effect()
    loadShoes$ = this.actions$
        .ofType(ShoeActions.ShoeActionTypes.LOAD_SHOES_REQUEST)
        .pipe(
            switchMap(() => this.shoeService.getShoes()),
            map((shoes: Shoe[]) => new ShoeActions.LoadShoesSuccessAction(shoes)),
            catchError((error) => error)
        )

}