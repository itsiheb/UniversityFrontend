import { InstructorTimeTableService } from './../../service/instructor-timetable.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-instructor-timetables',
  templateUrl: './instructor-timetables.component.html',
  styleUrls: ['./instructor-timetables.component.scss']
})
export class InstructorTimetablesComponent implements OnInit {

 
  instructortimetables_table$:Observable<any[]> | undefined ;

  constructor(private iTTService:InstructorTimeTableService ) { }


  ngOnInit(): void {

    this.instructortimetables_table$ = this.iTTService.getInstructorTimeTables();
  }
  modalTitle:string = '';
  activateAddEditITTComponent:boolean = false;
  iTT:any;

  modalAdd() {
    this.iTT= {
      id:0,
      duration:null,
   
    }
    this.modalTitle = "Add Instructor Timetable";
    this.activateAddEditITTComponent = true;
    this.instructortimetables_table$ = this.iTTService.getInstructorTimeTables();
  }

  modalEdit(item:any) {
    
    this.iTT = item;
    this.modalTitle = "Edit Student Timetable";
    this.activateAddEditITTComponent = true;
    this.instructortimetables_table$ = this.iTTService.getInstructorTimeTables();
    
  }
  modalClose() {
    this.activateAddEditITTComponent = false;
    this.instructortimetables_table$ = this.iTTService.getInstructorTimeTables(); 
   }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete this Instructor timetable ${item.id}`)) {
    this.iTTService.deleteInstructorTimeTable(item.id).subscribe(res => {
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


