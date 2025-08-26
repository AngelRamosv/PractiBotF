import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppionicPage } from './appionic.page';

describe('AppionicPage', () => {
  let component: AppionicPage;
  let fixture: ComponentFixture<AppionicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
