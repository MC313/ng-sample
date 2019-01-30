import { Action } from '@ngrx/store';

import { Shoe } from '../Shoe';

export enum ShoeActionTypes {
    LOAD_SHOES_REQUEST = '[Shoe] Load Shoes',
    LOAD_SHOES_SUCCESS = '[Shoe] Load Shoes Success',
    LOAD_SHOES_FAILURE = '[Shoe] Load Shoes Failure'
}

export class LoadShoesRequest implements Action {
    readonly type = ShoeActionTypes.LOAD_SHOES_REQUEST;
}

export class LoadShoesSuccess implements Action {
    readonly type = ShoeActionTypes.LOAD_SHOES_SUCCESS;

    constructor(public payload: Shoe[]) { }
}

export class LoadShoesFailure implements Action {
    readonly type = ShoeActionTypes.LOAD_SHOES_FAILURE;

    constructor(public payload: any) { }
}



export type ShoeActions =
    LoadShoesRequest |
    LoadShoesSuccess |
    LoadShoesFailure;