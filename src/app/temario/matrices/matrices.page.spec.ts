import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatricesPage } from './matrices.page';

describe('MatricesPage', () => {
  let component: MatricesPage;
  let fixture: ComponentFixture<MatricesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
