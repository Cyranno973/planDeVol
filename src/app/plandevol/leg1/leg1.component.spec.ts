import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leg1Component } from './leg1.component';

describe('Leg1Component', () => {
  let component: Leg1Component;
  let fixture: ComponentFixture<Leg1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leg1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
