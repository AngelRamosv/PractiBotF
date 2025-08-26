import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosSimplePage } from './ejercicios-simple.page';

describe('EjerciciosSimplePage', () => {
  let component: EjerciciosSimplePage;
  let fixture: ComponentFixture<EjerciciosSimplePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosSimplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
