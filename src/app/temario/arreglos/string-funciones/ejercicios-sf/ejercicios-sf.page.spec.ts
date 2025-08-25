import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosSFPage } from './ejercicios-sf.page';

describe('EjerciciosSFPage', () => {
  let component: EjerciciosSFPage;
  let fixture: ComponentFixture<EjerciciosSFPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosSFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
