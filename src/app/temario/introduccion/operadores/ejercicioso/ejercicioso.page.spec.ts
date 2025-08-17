import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosoPage } from './ejercicioso.page';

describe('EjerciciosoPage', () => {
  let component: EjerciciosoPage;
  let fixture: ComponentFixture<EjerciciosoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
