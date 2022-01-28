import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRestauranteComponent } from './card-restaurante.component';

describe('CardRestauranteComponent', () => {
  let component: CardRestauranteComponent;
  let fixture: ComponentFixture<CardRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRestauranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
