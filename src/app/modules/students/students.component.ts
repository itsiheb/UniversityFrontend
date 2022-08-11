import { ClassService } from './../../service/class.service';
import { StudentService } from './../../service/student.service';
import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  
  students_table$!:Observable<any[]>  ;
  classes_list$!:Observable<any[]>  ;
  classes_list:any=[];
  classesMap:Map<number,string>= new Map();

  constructor(private studentService:StudentService,private ClassService:ClassService 
  ) { }


  ngOnInit(): void {

    this.students_table$ = this.studentService.getStudents();
    console.log(this.students_table$);
     this.classes_list$ = this.ClassService.getClasses();
     this.refreshClassesMap();
  }

  refreshClassesMap(){
    this.ClassService.getClasses().subscribe(data=>{
      this.classes_list = data;
      for(let i =0; i<data.length;i++){
        this.classesMap.set(this.classes_list[i].id,this.classes_list[i].name);
      }
    })
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


