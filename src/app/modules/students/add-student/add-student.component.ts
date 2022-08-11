import { ClassService } from './../../../service/class.service';
import { StudentService } from './../../../service/student.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  student_list$!: Observable<any[]>;
  classes_list$!: Observable<any[]>;

  constructor(private StudentService :StudentService,private classService:ClassService ) { }

  @Input() student:any;
  id: number = 0;
  firstName: string = "";
  lastName : string = "";
  email : string = "";
  current_class_id!: number ;
  adress : string = "";
  phone : string = "";


  selectClass(event: Event)
  {
     const value = (event.target as HTMLInputElement).value;
    if(value)
      this.current_class_id = Number(value);
    
  }

    ngOnInit(): void {
      this.id = this.student.id;
      this.firstName = this.student.firstName;
      this.lastName = this.student.lastName;
      this.email = this.student.email;
      this.adress = this.student.adress;
      this.phone = this.student.phone;
      this.current_class_id = this.student.current_class_id;
      this.student_list$ = this.StudentService.getStudents();
      this.classes_list$ = this.classService.getClasses();
    }
   

    addStudent() {
      var student = {
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        adress:this.adress,
        phone:this.phone,
      }
      this.StudentService.addStudent(this.current_class_id,student).subscribe(res => {
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
  
    updateStudent() {
     var student = {
        id: this.id,
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        adress:this.adress,
        phone:this.phone,
      }
      var id:number = this.id;
      
      this.StudentService.updateStudent(this.current_class_id,id,student).subscribe(res => {
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
            showUpdateSuccess.style.display = "none";
          }
        }, 4000);
        })
      }
    }
