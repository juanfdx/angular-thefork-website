import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoYBotonComponent } from './texto-y-boton.component';

describe('TextoYBotonComponent', () => {
  let component: TextoYBotonComponent;
  let fixture: ComponentFixture<TextoYBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextoYBotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoYBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
