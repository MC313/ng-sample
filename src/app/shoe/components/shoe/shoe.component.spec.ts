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
    spyOn(component.showDetails, 'emit');
  });

  it('should create shoe component', () => {
    expect(component).toBeDefined();
  });

  it('should contain a button with "details" text', () => {
    expect(button.textContent).toEqual('details');
  });

  it('should trigger emit event when "details" button is clicked', () => {
    button.click();
    expect(component.showDetails.emit).toHaveBeenCalled();
  });

  it('should emit shoe info when "showShoeDetails" method is called with shoe info parameter', () => {
    component.showShoeDetails(shoe);
    expect(component.showDetails.emit).toHaveBeenCalledWith(shoe.id);
  });

});
