import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjercicioStringPage } from './ejercicio-string.page';

describe('EjercicioStringPage', () => {
  let component: EjercicioStringPage;
  let fixture: ComponentFixture<EjercicioStringPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioStringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
