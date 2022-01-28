import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaTheForkComponent } from './acerca-the-fork.component';

describe('AcercaTheForkComponent', () => {
  let component: AcercaTheForkComponent;
  let fixture: ComponentFixture<AcercaTheForkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaTheForkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaTheForkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
