import { Action } from '@ngrx/store';

import { Product } from '../Product';

export enum CartActionTypes {
    LOAD_CART = '[Cart] Load Cart Action',
    ADD_PRODUCT = '[Cart] Add Product to Cart Action',
    UPDATE_PRODUCT = '[Cart] Update Product in Cart Action',
    REMOVE_PRODUCT = '[Cart] Remove Product From Cart Action'
}

export class LoadCart implements Action {
    readonly type = CartActionTypes.LOAD_CART;

    //constructor(public payload: Cart = { products: [], totalPrice: 0 }) { }
}

export class AddProduct implements Action {
    readonly type = CartActionTypes.ADD_PRODUCT;

    constructor(public payload: Product) { }
}

export class RemoveProduct implements Action {
    readonly type = CartActionTypes.REMOVE_PRODUCT;

    constructor(public payload: Product) { }
}

export class UpdateProduct implements Action {
    readonly type = CartActionTypes.UPDATE_PRODUCT;

    constructor(public payload: Product) { }
}

export type CartActions =
    LoadCart |
    AddProduct |
    UpdateProduct |
    RemoveProduct;