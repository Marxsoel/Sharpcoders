import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compomente1Component } from './compomente1.component';

describe('Compomente1Component', () => {
  let component: Compomente1Component;
  let fixture: ComponentFixture<Compomente1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compomente1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Compomente1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
