import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosdPage } from './ejerciciosd.page';

describe('EjerciciosdPage', () => {
  let component: EjerciciosdPage;
  let fixture: ComponentFixture<EjerciciosdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
