import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTarjetaComponent } from './nueva-tarjeta.component';

describe('NuevaTarjetaComponent', () => {
  let component: NuevaTarjetaComponent;
  let fixture: ComponentFixture<NuevaTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
