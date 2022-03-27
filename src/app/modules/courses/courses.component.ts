import { CourseService } from './../../service/course.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses_table$ : Observable<any[]> | undefined ;

  constructor(private courseService:CourseService ) { }

  ngOnInit(): void {

    this.courses_table$ = this.courseService.getcourses();
  }
  modalTitle:string = '';
  activateAddEditCourseComponent:boolean = false;
  course:any;

  modalAdd() {
    this.course= {
      id:0,
      name:null,
      coefficient:null,
      creditHours:null,
    }
    this.modalTitle = "Add Course";
    this.activateAddEditCourseComponent = true;
    this.courses_table$ = this.courseService.getcourses();
  }

  modalEdit(item:any) {
    
    this.course = item;
    this.modalTitle = "Edit Course";
    this.activateAddEditCourseComponent = true;
    this.courses_table$ = this.courseService.getcourses();
    
  }
  modalClose() {
    this.activateAddEditCourseComponent = false;
  }
  delete(item:any) {
    if(confirm(`Are you sure you want to delete : ${item.name}`)) {
    this.courseService.deleteCourse(item.id).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }
      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.courses_table$ = this.courseService.getcourses();
      })
    }
  }

  }


