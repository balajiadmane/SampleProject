import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateviewComponent } from './rateview.component';

describe('RateviewComponent', () => {
  let component: RateviewComponent;
  let fixture: ComponentFixture<RateviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
