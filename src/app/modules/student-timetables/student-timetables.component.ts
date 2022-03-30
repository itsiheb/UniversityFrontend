import { StudentTimeTableService } from './../../service/student-timetable.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-timetables',
  templateUrl: './student-timetables.component.html',
  styleUrls: ['./student-timetables.component.scss']
})
export class StudentTimetablesComponent implements OnInit {

 
  studenttimetables_table$:Observable<any[]> | undefined ;

  constructor(private sTTService:StudentTimeTableService ) { }


  ngOnInit(): void {

    this.studenttimetables_table$ = this.sTTService.getStudentTimeTables();
  }
  modalTitle:string = '';
  activateAddEditSTTComponent:boolean = false;
  sTT:any;

  modalAdd() {
    this.sTT= {
      id:0,
      duration:null,
   
    }
    this.modalTitle = "Add Student Timetable";
    this.activateAddEditSTTComponent = true;
    this.studenttimetables_table$ = this.sTTService.getStudentTimeTables();
  }

  modalEdit(item:any) {
    
    this.sTT = item;
    this.modalTitle = "Edit Student Timetable";
    this.activateAddEditSTTComponent = true;
    this.studenttimetables_table$ = this.sTTService.getStudentTimeTables();
    
  }
  modalClose() {
    this.activateAddEditSTTComponent = false;
    this.studenttimetables_table$ = this.sTTService.getStudentTimeTables();
  }
  delete(item:any) {
    if(confirm(`Are you sure you want to delete this Student timetable ${item.id}`)) {
    this.sTTService.deleteStudentTimeTable(item.id).subscribe(res => {
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


