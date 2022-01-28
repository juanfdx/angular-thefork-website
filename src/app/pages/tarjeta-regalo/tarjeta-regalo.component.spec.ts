import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaRegaloComponent } from './tarjeta-regalo.component';

describe('TarjetaRegaloComponent', () => {
  let component: TarjetaRegaloComponent;
  let fixture: ComponentFixture<TarjetaRegaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaRegaloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaRegaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
