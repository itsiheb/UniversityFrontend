import { StudentService } from './../../service/student.service';
import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  
  students_table$:Observable<any[]> | undefined ;

  constructor(private studentService:StudentService ) { }


  ngOnInit(): void {

    this.students_table$ = this.studentService.getStudents();
  }
  modalTitle:string = '';
  activateAddEditStudentComponent:boolean = false;
  student:any;

  modalAdd() {
    this.student= {
      id:0,
      firstName:null,
      LastName:null,
      email:null,
      adress:null,
      phone:null,
    }
    this.modalTitle = "Add Student";
    this.activateAddEditStudentComponent = true;
    this.students_table$ = this.studentService.getStudents();
  }

  modalEdit(item:any) {
    
    this.student = item;
    this.modalTitle = "Edit Student";
    this.activateAddEditStudentComponent = true;
    this.students_table$ = this.studentService.getStudents();
    
  }
  modalClose() {
    this.activateAddEditStudentComponent = false;
    this.students_table$ = this.studentService.getStudents();
  }
  delete(item:any) {
    if(confirm(`Are you sure you want to delete this Student ${item.id}`)) {
    this.studentService.deleteStudent(item.id).subscribe(res => {
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


