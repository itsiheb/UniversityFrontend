import { OnlineSessionService } from './../../service/onlineSession.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-online-sessions',
  templateUrl: './online-sessions.component.html',
  styleUrls: ['./online-sessions.component.scss']
})
export class OnlineSessionsComponent implements OnInit {

  onlineSessions_table$:Observable<any[]> | undefined ;

  constructor(private onlineSessionService:OnlineSessionService ) { }

  ngOnInit(): void {

    this.onlineSessions_table$ = this.onlineSessionService.getOnlineSessions();
  }
  modalTitle:string = '';
  activateAddEditOnlineSessionComponent:boolean = false;
  onlineSession:any;

  modalAdd() {
    this.onlineSession= {
      id:0,
      duration:null,
    }
    this.modalTitle = "Add Online Session";
    this.activateAddEditOnlineSessionComponent = true;
    this.onlineSessions_table$ = this.onlineSessionService.getOnlineSessions();
  }

  modalEdit(item:any) {
    
    this.onlineSession = item;
    this.modalTitle = "Edit Online Session";
    this.activateAddEditOnlineSessionComponent = true;
    this.onlineSessions_table$ = this.onlineSessionService.getOnlineSessions();
    
  }
  modalClose() {
    this.activateAddEditOnlineSessionComponent = false;
    this.onlineSessions_table$ = this.onlineSessionService.getOnlineSessions();
  }
  delete(item:any) {
    if(confirm(`Are you sure you want to delete this Online Session ${item.id}`)) {
    this.onlineSessionService.deleteOnlineSession(item.id).subscribe(res => {
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


