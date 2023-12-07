import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compomente2Component } from './compomente2.component';

describe('Compomente2Component', () => {
  let component: Compomente2Component;
  let fixture: ComponentFixture<Compomente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compomente2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Compomente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
