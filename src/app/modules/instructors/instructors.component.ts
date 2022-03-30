import { InstructorService } from './../../service/instructor.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  instructors_table$:Observable<any[]> | undefined ;

  constructor(private instructorService:InstructorService ) { }

  ngOnInit(): void {

    this.instructors_table$ = this.instructorService.getInstructors();
  }
  modalTitle:string = '';
  activateAddEditInstructorComponent:boolean = false;
  instructor:any;

  modalAdd() {
    this.instructor= {
      id:0,
      firstName:null,
      LastName:null,
      email:null,
      adress:null,
      phone:null,
    }
    this.modalTitle = "Add Instructor";
    this.activateAddEditInstructorComponent = true;
    this.instructors_table$ = this.instructorService.getInstructors();
  }

  modalEdit(item:any) {
    
    this.instructor = item;
    this.modalTitle = "Edit Instructor";
    this.activateAddEditInstructorComponent = true;
    this.instructors_table$ = this.instructorService.getInstructors();
    
  }
  modalClose() {
    this.activateAddEditInstructorComponent = false;
    this.instructors_table$ = this.instructorService.getInstructors();
  }
  delete(item:any) {
    if(confirm(`Are you sure you want to delete this tenant ${item.id}`)) {
    this.instructorService.deleteInstructor(item.id).subscribe(res => {
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
      })
    }
  }

  }


