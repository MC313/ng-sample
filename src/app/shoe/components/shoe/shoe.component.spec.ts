import { DebugElement, ElementRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { ShoeComponent } from './shoe.component';
import { Shoe } from '../../Shoe';

describe('ShoeComponent', () => {
  let addToCartButton: ElementRef;
  let component: ShoeComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<ShoeComponent>;
  const shoe: Shoe = {
    id: 0,
    name: 'Air Jordan 1',
    description: 'initial shoe',
    sizes: ['10.5'],
    price: 100.00
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
    addToCartButton = debugElement.query(By.css('button'));
  });

  it('should create shoe component', () => {
    expect(component).toBeTruthy();
  });

  xit('should emit an event when the button is clicked', () => {
    spyOn(component.addToCart, 'emit');
    addToCartButton.nativeElement.click();
    expect(component.addToCart.emit).toHaveBeenCalled();
  })

  xit('should emit an event containing shoe data', () => {
    spyOn(component.addToCart, 'emit');
    addToCartButton.nativeElement.click();
    expect(component.addToCart.emit).toHaveBeenCalledWith(shoe);
  })
});
