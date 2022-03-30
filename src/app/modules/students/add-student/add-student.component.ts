import { StudentService } from './../../../service/student.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  @Input() student:any;
  id: number = 0;
  firstName: string = "";
  lastName : string = "";
  email : string = "";
  adress : string = "";
  phone : string = "";

  constructor(private StudentService :StudentService) { }

    ngOnInit(): void {
      this.id = this.student.id;
      this.firstName = this.student.firstName;
      this.lastName = this.student.lastName;
      this.email = this.student.email;
      this.adress = this.student.adress;
      this.phone = this.student.phone;
    }
   

    addStudent() {
      var student = {
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        adress:this.adress,
        phone:this.phone
      }
      this.StudentService.addStudent(student).subscribe(res => {
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
        phone:this.phone
      }
      var id:number = this.id;
      this.StudentService.updateStudent(id,student).subscribe(res => {
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
