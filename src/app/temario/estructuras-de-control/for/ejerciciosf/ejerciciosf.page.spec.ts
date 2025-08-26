import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosfPage } from './ejerciciosf.page';

describe('EjerciciosfPage', () => {
  let component: EjerciciosfPage;
  let fixture: ComponentFixture<EjerciciosfPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
