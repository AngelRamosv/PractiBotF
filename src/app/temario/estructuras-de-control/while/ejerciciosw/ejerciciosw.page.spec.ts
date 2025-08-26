import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjercicioswPage } from './ejerciciosw.page';

describe('EjercicioswPage', () => {
  let component: EjercicioswPage;
  let fixture: ComponentFixture<EjercicioswPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioswPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
