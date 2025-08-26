import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosMultiplePage } from './ejercicios-multiple.page';

describe('EjerciciosMultiplePage', () => {
  let component: EjerciciosMultiplePage;
  let fixture: ComponentFixture<EjerciciosMultiplePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosMultiplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
