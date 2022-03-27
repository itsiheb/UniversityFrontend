
import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  @Input() course:any;
  id: number = 0;
  name: string = "";
  coefficient:number =0;
  creditHours:number =0;

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.id = this.course.id;
    this.name = this.course.name;
    this.coefficient = this.course.coefficient;
    this.creditHours = this.course.creditHours;

  }
 

  addCourse() {
    var course = {
      name:this.name,
      coefficient:this.coefficient,
      creditHours:this.creditHours,
    }
    this.courseService.addCourse(course).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })

  }

  updateCourse() {
   var course = {
      id: this.id,
      name:this.name,
      coefficient:this.coefficient,
      creditHours:this.creditHours,
    }
    var id:number = this.id;
    this.courseService.updateCourse(id,course).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
      })
    }
  }
