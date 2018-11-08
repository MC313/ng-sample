import { Product } from './Product';

export interface Cart {
    totalPrice: number;
    products: Product[];
}