import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorTimetablesComponent } from './instructor-timetables.component';

describe('InstructorTimetablesComponent', () => {
  let component: InstructorTimetablesComponent;
  let fixture: ComponentFixture<InstructorTimetablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorTimetablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorTimetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
