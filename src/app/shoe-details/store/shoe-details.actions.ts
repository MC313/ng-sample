import { Action } from '@ngrx/store';

export enum ShoeDetailsActionTypes {
    SHOW_SHOE_DETAILS_OVERLAY = '[Shoe Details] Show Shoe Details Overlay',
    HIDE_SHOE_DETAILS_OVERLAY = '[Shoe Details] Hide Shoe Details Overlay'
}

export class ShowShoeDetailsOverlay implements Action {
    readonly type = ShoeDetailsActionTypes.SHOW_SHOE_DETAILS_OVERLAY;

    constructor(public payload: number) { }
}

export class HideShoeDetailsOverlay implements Action {
    readonly type = ShoeDetailsActionTypes.HIDE_SHOE_DETAILS_OVERLAY;

    constructor(public payload: null = null) { }
}

export type ShoeDetailsActions =
    ShowShoeDetailsOverlay |
    HideShoeDetailsOverlay;