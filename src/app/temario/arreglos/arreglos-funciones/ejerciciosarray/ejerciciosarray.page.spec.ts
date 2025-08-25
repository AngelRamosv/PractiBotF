import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosarrayPage } from './ejerciciosarray.page';

describe('EjerciciosarrayPage', () => {
  let component: EjerciciosarrayPage;
  let fixture: ComponentFixture<EjerciciosarrayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosarrayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
