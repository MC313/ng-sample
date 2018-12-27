import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StoreModule, Store } from '@ngrx/store';

import { reducer } from '../../store/shoe.reducer';
import { Shoe } from '../../Shoe';
import { ShoeComponent } from '../../components/shoe/shoe.component';
import { ShoeState } from '../../store/shoe.state';
import { ShoesComponent } from './shoes.component';
import * as CartActions from '../../../cart/store/cart.actions';
import * as ShoeActions from '../../store/shoe.actions';

describe('ShoesComponent', () => {
    let component: ShoesComponent;
    let fixture: ComponentFixture<ShoesComponent>;
    let store: Store<ShoeState>;
    const shoe: Shoe = {
        id: 0,
        name: 'Air Jordan 1',
        description: 'initial shoe',
        sizes: ['10.5'],
        price: 100.00
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({}),
                StoreModule.forFeature('shoe', reducer)
            ],
            declarations: [
                ShoesComponent,
                ShoeComponent
            ],
        });

        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(ShoesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create shoes component', () => {
        expect(component).toBeDefined();
    });

    it('should dispatch an action to load shoes when component is created', () => {
        component.ngOnInit();
        const action = new ShoeActions.LoadShoesRequest();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should display a list of shoes after shoes are loaded', () => {
        const shoes: Shoe[] = [shoe];
        const action = new ShoeActions.LoadShoesSuccess([shoe]);
        store.dispatch(action);
        component.shoes$.subscribe(shoesData => {
            expect(shoesData.length).toEqual(shoes.length);
        })
    });

    it('should call addToCart method when child component emits "addToCart" event', () => {
        spyOn(component, 'addToCart');
        const shoeComponents = fixture.debugElement.queryAll(By.directive(ShoeComponent));
        (<ShoeComponent>shoeComponents[0].componentInstance).addToCart.emit(shoe);
        expect(component.addToCart).toHaveBeenCalledWith(shoe);
    });

    it('should dispatch an action to add product to cart when addToCart method is called', () => {
        component.addToCart(shoe);
        const product: Shoe & { quantity: 1 } = { ...shoe, quantity: 1 };
        const action = new CartActions.AddProduct(product);
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

});
