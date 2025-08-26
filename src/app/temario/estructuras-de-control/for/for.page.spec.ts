import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForPage } from './for.page';

describe('ForPage', () => {
  let component: ForPage;
  let fixture: ComponentFixture<ForPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
