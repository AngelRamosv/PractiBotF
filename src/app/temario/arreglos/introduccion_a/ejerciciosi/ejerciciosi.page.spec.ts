import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosiPage } from './ejerciciosi.page';

describe('EjerciciosiPage', () => {
  let component: EjerciciosiPage;
  let fixture: ComponentFixture<EjerciciosiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
