import { OnlineSessionService } from './../../../service/onlineSession.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-online-session',
  templateUrl: './add-online-session.component.html',
  styleUrls: ['./add-online-session.component.scss']
})
export class AddOnlineSessionComponent implements OnInit {


  @Input() onlineSession:any;
  id: number = 0;
  duration: string = "";
 
  constructor(private onlineSessionService:OnlineSessionService) { }

  ngOnInit(): void {
    this.id = this.onlineSession.id;
    this.duration = this.onlineSession.duration;
  
  }
 

  addOnlineSession() {
    var onlineSession = {
      duration:this.duration,
   
    }
    this.onlineSessionService.addOnlineSession(onlineSession).subscribe(res => {
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

  updateOnlineSession() {
   var onlineSession = {
      id: this.id,
      duration:this.duration,
    
    }
    var id:number = this.id;
    this.onlineSessionService.updateOnlineSession(id,onlineSession).subscribe(res => {
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
