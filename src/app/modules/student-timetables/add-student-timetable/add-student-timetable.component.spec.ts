import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentTimetableComponent } from './add-student-timetable.component';

describe('AddStudentTimetableComponent', () => {
  let component: AddStudentTimetableComponent;
  let fixture: ComponentFixture<AddStudentTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentTimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
