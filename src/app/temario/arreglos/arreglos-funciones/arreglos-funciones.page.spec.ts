import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArreglosFuncionesPage } from './arreglos-funciones.page';

describe('ArreglosFuncionesPage', () => {
  let component: ArreglosFuncionesPage;
  let fixture: ComponentFixture<ArreglosFuncionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArreglosFuncionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
