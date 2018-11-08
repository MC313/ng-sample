import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../../store/app.store';
import { ShoeState } from './shoe.state';

const selectFeature = createFeatureSelector<AppState, ShoeState>('shoe');

export const selectAllShoes = createSelector(
    selectFeature,
    (shoeState: ShoeState) => shoeState.shoes
);

