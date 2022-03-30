import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstructorTimetableComponent } from './add-instructor-timetable.component';

describe('AddInstructorTimetableComponent', () => {
  let component: AddInstructorTimetableComponent;
  let fixture: ComponentFixture<AddInstructorTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInstructorTimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstructorTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
