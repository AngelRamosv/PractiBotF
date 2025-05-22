import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemarioPage } from './temario.page';

describe('TemarioPage', () => {
  let component: TemarioPage;
  let fixture: ComponentFixture<TemarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TemarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
