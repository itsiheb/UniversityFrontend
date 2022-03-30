import { InstructorService } from './../../../service/instructor.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.scss']
})
export class AddInstructorComponent implements OnInit {

  @Input() instructor:any;
  id: number = 0;
  firstName: string = "";
  lastName : string = "";
  email : string = "";
  adress : string = "";
  phone : string = "";

  constructor(private instructorService:InstructorService) { }

  ngOnInit(): void {
    this.id = this.instructor.id;
    this.firstName = this.instructor.firstName;
    this.lastName = this.instructor.lastName;
    this.email = this.instructor.email;
    this.adress = this.instructor.adress;
    this.phone = this.instructor.phone;
  }
 

  addInstructor() {
    var instructor = {
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      adress:this.adress,
      phone:this.phone
    }
    this.instructorService.addInstructor(instructor).subscribe(res => {
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

  updateInstructor() {
   var instructor = {
      id: this.id,
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      adress:this.adress,
      phone:this.phone
    }
    var id:number = this.id;
    this.instructorService.updateInstructor(id,instructor).subscribe(res => {
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
