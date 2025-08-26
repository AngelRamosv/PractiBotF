import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionSimplePage } from './seleccion-simple.page';

describe('SeleccionSimplePage', () => {
  let component: SeleccionSimplePage;
  let fixture: ComponentFixture<SeleccionSimplePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionSimplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
