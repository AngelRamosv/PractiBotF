import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoWhilePage } from './do-while.page';

describe('DoWhilePage', () => {
  let component: DoWhilePage;
  let fixture: ComponentFixture<DoWhilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DoWhilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
