import { Shoe } from '../Shoe';

export interface ShoeState {
    shoes: Shoe[],
    selectedShoe: number
}