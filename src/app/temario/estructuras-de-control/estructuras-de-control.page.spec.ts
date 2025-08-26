import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstructurasDeControlPage } from './estructuras-de-control.page';

describe('EstructurasDeControlPage', () => {
  let component: EstructurasDeControlPage;
  let fixture: ComponentFixture<EstructurasDeControlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructurasDeControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
