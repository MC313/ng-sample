import { Shoe } from '../shoe/Shoe';

export type Product = Shoe & { quantity: number };
