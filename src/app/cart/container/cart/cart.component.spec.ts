import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StoreModule, Store } from '@ngrx/store';

import { reducer } from '../../store/cart.reducer';
import { CartState } from '../../store/cart.state';
import { CartComponent } from './cart.component';
import * as CartActions from '../../../cart/store/cart.actions';
import { Product } from '../../Product';
import { ProductComponent } from '../../components/product/product.component';
import { TotalPriceComponent } from '../../components/total-price/total-price.component';

describe('CartComponent', () => {
    let component: CartComponent;
    let fixture: ComponentFixture<CartComponent>;
    let store: Store<CartState>;
    const product: Product = {
        id: 0,
        name: 'Air Jordan 1',
        description: 'initial shoe',
        sizes: ['10.5'],
        price: 100.00,
        quantity: 1
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({}),
                StoreModule.forFeature('cart', reducer)
            ],
            declarations: [
                CartComponent,
                ProductComponent,
                TotalPriceComponent
            ],
        });

        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
    });

    it('should create cart component', () => {
        expect(component).toBeDefined();
    });

    xit('should dispatch an action to load the cart when the component is created', () => {
        component.ngOnInit();
        const action = new CartActions.LoadCart();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    xit('should display a list of shoes after shoes are loaded', () => {
        // const cart: Shoe[] = [shoe];
        // const action = new CartActions.LoadShoesSuccess([shoe]);
        // store.dispatch(action);
        // component.shoes$.subscribe(shoesData => {
        //     expect(shoesData.length).toEqual(shoes.length);
        // })
    });

    xit('should call addToCart method when child component emits "addToCart" event', () => {
        // spyOn(component, 'addToCart');
        // const shoeComponents = fixture.debugElement.queryAll(By.directive(ShoeComponent));
        // //(<ShoeComponent>shoeComponents[0].componentInstance).addToCart.emit(shoe);
        // shoeComponents[0].triggerEventHandler('addToCart', shoe);
        // expect(component.addToCart).toHaveBeenCalledWith(shoe);
    });

    xit('should dispatch an action to add product to cart when addToCart method is called', () => {
        // component.addToCart(shoe);
        // const product: Shoe & { quantity: 1 } = { ...shoe, quantity: 1 };
        // const action = new CartActions.AddProduct(product);
        // expect(store.dispatch).toHaveBeenCalledWith(action);
    });

});
