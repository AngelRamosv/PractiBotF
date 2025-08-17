import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosvPage } from './ejerciciosv.page';

describe('EjerciciosvPage', () => {
  let component: EjerciciosvPage;
  let fixture: ComponentFixture<EjerciciosvPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

