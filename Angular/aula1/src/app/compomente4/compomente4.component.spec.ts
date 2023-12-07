import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compomente4Component } from './compomente4.component';

describe('Compomente4Component', () => {
  let component: Compomente4Component;
  let fixture: ComponentFixture<Compomente4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compomente4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Compomente4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
