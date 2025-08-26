import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhilePage } from './while.page';

describe('WhilePage', () => {
  let component: WhilePage;
  let fixture: ComponentFixture<WhilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WhilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
