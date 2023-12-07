import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compomente3Component } from './compomente3.component';

describe('Compomente3Component', () => {
  let component: Compomente3Component;
  let fixture: ComponentFixture<Compomente3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compomente3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Compomente3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
