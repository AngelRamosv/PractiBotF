import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SintaxisPage } from './sintaxis.page';

describe('SintaxisPage', () => {
  let component: SintaxisPage;
  let fixture: ComponentFixture<SintaxisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SintaxisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
