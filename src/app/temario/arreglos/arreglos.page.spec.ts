import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArreglosPage } from './arreglos.page';

describe('ArreglosPage', () => {
  let component: ArreglosPage;
  let fixture: ComponentFixture<ArreglosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArreglosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
