import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EresPropietarioComponent } from './eres-propietario.component';

describe('EresPropietarioComponent', () => {
  let component: EresPropietarioComponent;
  let fixture: ComponentFixture<EresPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EresPropietarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EresPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
