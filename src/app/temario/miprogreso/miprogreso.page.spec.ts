import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiprogresoPage } from './miprogreso.page';

describe('MiprogresoPage', () => {
  let component: MiprogresoPage;
  let fixture: ComponentFixture<MiprogresoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiprogresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
