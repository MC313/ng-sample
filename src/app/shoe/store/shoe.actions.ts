import { Action } from '@ngrx/store';

import { Shoe } from '../Shoe';

export enum ShoeActionTypes {
    LOAD_SHOES_REQUEST = '[Shoe] Load Shoes',
    LOAD_SHOES_SUCCESS = '[Shoe] Load Shoes Success',
    LOAD_SHOES_FAILURE = '[Shoe] Load Shoes Failure',
    SHOW_SHOE_DETAILS = '[Shoe] Show Shoe Details',
    HIDE_SHOE_DETAILS = '[Shoe] Hide Shoe Details'
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

export class ShowShoeDetails implements Action {
    readonly type = ShoeActionTypes.SHOW_SHOE_DETAILS;

    constructor(public payload: number) { }
}

export class HideShoeDetails implements Action {
    readonly type = ShoeActionTypes.HIDE_SHOE_DETAILS;
}

export type ShoeActions =
    LoadShoesRequest |
    LoadShoesSuccess |
    LoadShoesFailure |
    ShowShoeDetails |
    HideShoeDetails;