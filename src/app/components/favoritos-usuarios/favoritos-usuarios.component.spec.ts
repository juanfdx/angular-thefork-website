import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosUsuariosComponent } from './favoritos-usuarios.component';

describe('FavoritosUsuariosComponent', () => {
  let component: FavoritosUsuariosComponent;
  let fixture: ComponentFixture<FavoritosUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritosUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
