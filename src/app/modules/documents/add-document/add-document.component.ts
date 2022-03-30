import { DocumentService } from './../../../service/document.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  @Input() adocument:any;
  id: number = 0;
  description: string = "";


  constructor(private documentService:DocumentService) { }

  ngOnInit(): void {
    this.id = this.adocument.id;
    this.description = this.adocument.description;
  }
 

  addDocument() {
    var adocument = {
      description:this.description,
    }
    this.documentService.addDocument(adocument).subscribe(res => {
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

  updateDocument() {
   var adocument = {
      id: this.id,
      description:this.description,
    }
    var id:number = this.id;
    this.documentService.updateDocument(id,adocument).subscribe(res => {
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
