import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCiudadComponent } from './slider-ciudad.component';

describe('SliderCiudadComponent', () => {
  let component: SliderCiudadComponent;
  let fixture: ComponentFixture<SliderCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
