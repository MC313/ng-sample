import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class CartEffects {

    constructor(private actions$: Actions) { }

}