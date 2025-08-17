import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciostPage } from './ejerciciost.page';

describe('EjerciciostPage', () => {
  let component: EjerciciostPage;
  let fixture: ComponentFixture<EjerciciostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
