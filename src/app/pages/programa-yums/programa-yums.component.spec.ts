import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaYumsComponent } from './programa-yums.component';

describe('ProgramaYumsComponent', () => {
  let component: ProgramaYumsComponent;
  let fixture: ComponentFixture<ProgramaYumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramaYumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaYumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
