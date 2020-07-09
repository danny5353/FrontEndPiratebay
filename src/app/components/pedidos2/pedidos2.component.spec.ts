import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pedidos2Component } from './pedidos2.component';

describe('Pedidos2Component', () => {
  let component: Pedidos2Component;
  let fixture: ComponentFixture<Pedidos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pedidos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pedidos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
