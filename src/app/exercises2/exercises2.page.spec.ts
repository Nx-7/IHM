import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercises2Page } from './exercises2.page';

describe('Exercises2Page', () => {
  let component: Exercises2Page;
  let fixture: ComponentFixture<Exercises2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Exercises2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
