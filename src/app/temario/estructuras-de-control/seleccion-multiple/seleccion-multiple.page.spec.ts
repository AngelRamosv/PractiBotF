import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionMultiplePage } from './seleccion-multiple.page';

describe('SeleccionMultiplePage', () => {
  let component: SeleccionMultiplePage;
  let fixture: ComponentFixture<SeleccionMultiplePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionMultiplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
