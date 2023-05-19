import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutMakePage } from './workout-make.page';

describe('WorkoutMakePage', () => {
  let component: WorkoutMakePage;
  let fixture: ComponentFixture<WorkoutMakePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorkoutMakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
