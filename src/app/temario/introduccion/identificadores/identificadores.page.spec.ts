import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdentificadoresPage } from './identificadores.page';

describe('IdentificadoresPage', () => {
  let component: IdentificadoresPage;
  let fixture: ComponentFixture<IdentificadoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
