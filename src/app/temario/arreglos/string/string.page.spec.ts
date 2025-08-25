import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StringPage } from './string.page';

describe('StringPage', () => {
  let component: StringPage;
  let fixture: ComponentFixture<StringPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
