import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRestauranteComponent } from './slider-restaurante.component';

describe('SliderRestauranteComponent', () => {
  let component: SliderRestauranteComponent;
  let fixture: ComponentFixture<SliderRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderRestauranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
