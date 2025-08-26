import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefinicionPage } from './definicion.page';

describe('DefinicionPage', () => {
  let component: DefinicionPage;
  let fixture: ComponentFixture<DefinicionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
