import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { Product } from '../../Product';

describe('ProductComponent', () => {
    let removeButton;
    let buttonElement: HTMLElement;
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;
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
            declarations: [ProductComponent]
        });

        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        buttonElement = fixture.nativeElement;
        removeButton = buttonElement.querySelector('.product__remove');
        spyOn(component.removeProduct, 'emit');
    });

    it('should create product component', () => {
        expect(component).toBeDefined();
    });

    it('should trigger emit event when "remove" button is clicked', () => {
        removeButton.click();
        expect(component.removeProduct.emit).toHaveBeenCalled();
    });

    it('should emit product info when "remove" method is called', () => {
        component.remove(product);
        expect(component.removeProduct.emit).toHaveBeenCalledWith(product);
    });

});
