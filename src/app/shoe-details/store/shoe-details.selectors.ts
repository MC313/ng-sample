import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../../store/app.store';
import { OverlayState } from '../OverlayState';
import { Shoe } from 'src/app/shoe/Shoe';
import { ShoeDetailsState } from './shoe-details.state';
import { ShoeState } from 'src/app/shoe/store/shoe.state';

const selectFeature = createFeatureSelector<AppState, ShoeDetailsState>('shoeDetails');
const selectShoeFeature = createFeatureSelector<AppState, ShoeState>('shoe');

export const selectShoeDetails = createSelector(
    selectFeature,
    selectShoeFeature,
    ({ currentShoeId }, { shoes }): Shoe | null => {
        return currentShoeId ? shoes.find(shoe => shoe.id === currentShoeId) : null;
    }
);

export const selectDetailsOverlayState = createSelector(
    selectFeature,
    ({ detailsOverlayState }): OverlayState => detailsOverlayState
);


