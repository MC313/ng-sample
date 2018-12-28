import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../../store/app.store';
import { CartState } from './cart.state';
import { Product } from '../Product';

const selectFeature = createFeatureSelector<AppState, CartState>('cart');

export const selectProductsInCart = createSelector(
    selectFeature,
    (cartState: CartState) => cartState.products
);

export const selectProductsTotalPrice = createSelector(
    selectFeature,
    (cartState: CartState) => {
        /*
            Get the total for each individual product based
            on price and quantity of product
        */
        const getProductPriceTotal = (product: Product) =>
            product.price * product.quantity;

        return cartState.products
            .map(getProductPriceTotal)
            .reduce((acc, productTotal) => {
                return acc + productTotal;
            }, 0);
    }
);

