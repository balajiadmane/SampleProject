import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPricingComponent } from './select-pricing.component';

describe('SelectPricingComponent', () => {
  let component: SelectPricingComponent;
  let fixture: ComponentFixture<SelectPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
