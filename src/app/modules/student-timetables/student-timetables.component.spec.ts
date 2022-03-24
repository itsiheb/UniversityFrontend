import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTimetablesComponent } from './student-timetables.component';

describe('StudentTimetablesComponent', () => {
  let component: StudentTimetablesComponent;
  let fixture: ComponentFixture<StudentTimetablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTimetablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTimetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
