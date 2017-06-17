import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCustomerComponent } from './display-customer.component';

describe('DisplayCustomerComponent', () => {
  let component: DisplayCustomerComponent;
  let fixture: ComponentFixture<DisplayCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
