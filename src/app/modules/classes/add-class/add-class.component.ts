import { ClassService } from './../../../service/class.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {

  @Input() aclass:any;
  id: number = 0;
  name: string = "";
  classEmail : string = "";

  constructor(private classService:ClassService) { }

  ngOnInit(): void {
    this.id = this.aclass.id;
    this.name = this.aclass.name;
    this.classEmail = this.aclass.classEmail;

  }
 

  addClass() {
    var aclass = {
      name:this.name,
      classEmail:this.classEmail,
    }
    this.classService.addClass(aclass).subscribe(res => {
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

  updateClass() {
   var aclass = {
      id: this.id,
      name:this.name,
      classEmail:this.classEmail,
    }
    var id:number = this.id;
    this.classService.updateClass(id,aclass).subscribe(res => {
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
