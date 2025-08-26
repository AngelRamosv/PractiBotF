import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosdwPage } from './ejerciciosdw.page';

describe('EjerciciosdwPage', () => {
  let component: EjerciciosdwPage;
  let fixture: ComponentFixture<EjerciciosdwPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosdwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
