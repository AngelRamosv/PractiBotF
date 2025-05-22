import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TiposDatosSimplesPage } from './tipos-datos-simples.page';

describe('TiposDatosSimplesPage', () => {
  let component: TiposDatosSimplesPage;
  let fixture: ComponentFixture<TiposDatosSimplesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDatosSimplesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
