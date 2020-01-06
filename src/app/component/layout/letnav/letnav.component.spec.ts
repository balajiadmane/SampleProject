import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetnavComponent } from './letnav.component';

describe('LetnavComponent', () => {
  let component: LetnavComponent;
  let fixture: ComponentFixture<LetnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
