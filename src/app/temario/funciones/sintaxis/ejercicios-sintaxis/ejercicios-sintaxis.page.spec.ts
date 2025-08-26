import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosSintaxisPage } from './ejercicios-sintaxis.page';

describe('EjerciciosSintaxisPage', () => {
  let component: EjerciciosSintaxisPage;
  let fixture: ComponentFixture<EjerciciosSintaxisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosSintaxisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
