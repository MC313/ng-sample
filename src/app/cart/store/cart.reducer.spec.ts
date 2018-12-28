import * as CartReducer from './cart.reducer';
import * as CartActions from './cart.actions';
import { Cart } from '../Cart';
import { Product } from '../Product';
import { CartState } from './cart.state';

describe('cart.reducer', () => {
    const { initialState } = CartReducer;
    const products: Product[] = [{
        id: 1,
        name: "Air Jordan 1",
        image: "",
        price: 200,
        description: "The Air Jordan 1 (I) was designed by Peter Moore and marked a new era in basketball shoewear design. There has been multiple fakes of this shoe and also other shoe brands made models where you could see lots of similarities with Air Jordan 1. The Air Jordan 1 – Black / Varsity Red model was banned by the NBA back in 1985 due to NBA color rules and this actually helped to create more publicity and interest for the shoes. Who knows, it might have been a marketing trick from Nike.",
        sizes: ["8", "9", "9.5", "10", "10.5"],
        quantity: 1
    },
    {
        id: 2,
        name: "Air Jordan 2",
        image: "",
        price: 200,
        description: "No black leather in Italy? The Air Jordan II was designed by Bruce Kilgore and just as its predecessor (Air Jordan 1 (I)) it showed a great innovative design. The low-tops were very stylish, produced in Italy and were far from the ordinary basketball shoe.",
        sizes: ["8", "8.5", "9", "9.5", "10", "10.5", "11"],
        quantity: 1
    }];
    const mockState: CartState = { products };

    beforeEach(() => { });

    it('should return default state when undefined action is passed in', () => {
        const action = {} as any;
        const updatedState: CartState = CartReducer.reducer(undefined, action);
        expect(updatedState).toBe(initialState);
    });

    it('should return an updated state containing the added product', () => {
        const action = new CartActions.AddProduct(products[0]);
        const updatedState: CartState = CartReducer.reducer(initialState, action);
        expect(updatedState.products.length).toEqual(1);
        expect(updatedState.products[0]).toBe(products[0]);
    });

    it(`should return an updated state that doesn't contain the removed product`, () => {
        const action = new CartActions.RemoveProduct(products[0]);
        const updatedState: CartState = CartReducer.reducer(mockState, action);
        expect(updatedState.products.length).toEqual(1);
        expect(updatedState.products[0]).toBe(products[1]);
    });

    xit(`should return an updated state with a product whose quantity has been incremented`, () => {

    });

    xit(`should return an updated state with a product whose quantity has been decremented`, () => {

    });
});