import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeComponent } from './shoe.component';
import { Shoe } from '../../Shoe';

describe('ShoeComponent', () => {
  let button;
  let buttonElement: HTMLElement;
  let component: ShoeComponent;
  let fixture: ComponentFixture<ShoeComponent>;
  const shoe: Shoe = {
    id: 0,
    name: 'Air Jordan 1',
    description: 'initial shoe',
    sizes: ['10.5'],
    price: 100.00
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoeComponent]
    });

    fixture = TestBed.createComponent(ShoeComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.nativeElement;
    button = buttonElement.querySelector('button');
  });

  it('should create shoe component', () => {
    expect(component).toBeDefined();
  });

  it('should contain a button with "Add to Cart" text', () => {
    expect(button.textContent).toEqual('Add to Cart');
  });

  it('should trigger emit event when "Add to Cart" button is clicked', () => {
    spyOn(component.addToCart, 'emit');
    button.click();
    expect(component.addToCart.emit).toHaveBeenCalled();
  });

  it('should emit shoe info when "Add to Cart" button is clicked', () => {
    spyOn(component.addToCart, 'emit');
    component.addShoeToCart(shoe);
    expect(component.addToCart.emit).toHaveBeenCalledWith(shoe);
  });

});
