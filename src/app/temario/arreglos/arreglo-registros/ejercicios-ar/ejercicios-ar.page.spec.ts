import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosARPage } from './ejercicios-ar.page';

describe('EjerciciosARPage', () => {
  let component: EjerciciosARPage;
  let fixture: ComponentFixture<EjerciciosARPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosARPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
