import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StringFuncionesPage } from './string-funciones.page';

describe('StringFuncionesPage', () => {
  let component: StringFuncionesPage;
  let fixture: ComponentFixture<StringFuncionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StringFuncionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
