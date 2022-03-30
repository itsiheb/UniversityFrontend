import { StudentTimeTableService } from './../../../service/student-timetable.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student-timetable',
  templateUrl: './add-student-timetable.component.html',
  styleUrls: ['./add-student-timetable.component.scss']
})
export class AddStudentTimetableComponent implements OnInit {

  @Input() sTT:any;
  id: number = 0;
  duration: string = "";


  constructor(private sTTService :StudentTimeTableService) { }

    ngOnInit(): void {
      this.id = this.sTT.id;
      this.duration = this.sTT.duration;
    
    }
   

    addStt() {
      var sTT = {
        duration:this.duration
        
      }
      this.sTTService.addStudentTimeTable(sTT).subscribe(res => {
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
  
    updateStt() {
     var sTT = {
        id: this.id,
        duration:this.duration,
       
      }
      var id:number = this.id;
      this.sTTService.updateStudentTimeTable(id,sTT).subscribe(res => {
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
