import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../../store/app.store';
import { ShoeState } from './shoe.state';
import { Shoe } from '../Shoe';

const selectFeature = createFeatureSelector<AppState, ShoeState>('shoe');

export const selectAllShoes = createSelector(
    selectFeature,
    (shoeState: ShoeState): Shoe[] => shoeState.shoes
);

