import { InstructorTimeTableService } from './../../../service/instructor-timetable.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-instructor-timetable',
  templateUrl: './add-instructor-timetable.component.html',
  styleUrls: ['./add-instructor-timetable.component.scss']
})
export class AddInstructorTimetableComponent implements OnInit {

  @Input() iTT:any;
  id: number = 0;
  duration: string = "";


  constructor(private iTTService :InstructorTimeTableService) { }

    ngOnInit(): void {
      this.id = this.iTT.id;
      this.duration = this.iTT.duration;
    
    }
   

    addItt() {
      var iTT = {
        duration:this.duration
        
      }
      this.iTTService.addInstructorTimeTable(iTT).subscribe(res => {
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
  
    updateItt() {
     var iTT = {
        id: this.id,
        duration:this.duration,
       
      }
      var id:number = this.id;
      this.iTTService.updateInstructorTimeTable(id,iTT).subscribe(res => {
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
