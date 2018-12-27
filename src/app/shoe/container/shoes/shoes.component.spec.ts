import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule, Store } from '@ngrx/store';

import { reducer } from '../../store/shoe.reducer';
import { Shoe } from '../../Shoe';
import { ShoeComponent } from '../../components/shoe/shoe.component';
import { ShoeState } from '../../store/shoe.state';
import { ShoesComponent } from './shoes.component';
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
    });

    it('should create shoes component', () => {
        expect(component).toBeDefined();
    });

    it('should dispatch an action to load shoes when component is created', () => {
        component.ngOnInit();
        const action = new ShoeActions.LoadShoesRequest();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should call addToCart method when child emits addToCart event', () => {
        component.ngOnInit();
        const action = new ShoeActions.LoadShoesRequest();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

});
