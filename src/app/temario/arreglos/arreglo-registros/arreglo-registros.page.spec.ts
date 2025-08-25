import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArregloRegistrosPage } from './arreglo-registros.page';

describe('ArregloRegistrosPage', () => {
  let component: ArregloRegistrosPage;
  let fixture: ComponentFixture<ArregloRegistrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArregloRegistrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
