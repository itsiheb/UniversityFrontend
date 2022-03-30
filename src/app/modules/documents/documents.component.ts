import { DocumentService } from './../../service/document.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {


  documents_table$:Observable<any[]> | undefined ;

  constructor(private documentService:DocumentService ) { }

  ngOnInit(): void {

    this.documents_table$ = this.documentService.getDocuments();
  }
  modalTitle:string = '';
  activateAddEditDocumentComponent:boolean = false;
  document:any;

  modalAdd() {
    this.document= {
      id:0,
      description:null,
    }
    this.modalTitle = "Add Document";
    this.activateAddEditDocumentComponent = true;
    this.documents_table$ = this.documentService.getDocuments();
  }

  modalEdit(item:any) {
    
    this.document = item;
    this.modalTitle = "Edit Document";
    this.activateAddEditDocumentComponent = true;
    this.documents_table$ = this.documentService.getDocuments();
    
  }
  modalClose() {
    this.activateAddEditDocumentComponent = false;
    this.documents_table$ = this.documentService.getDocuments();
  }
  delete(item:any) {
    if(confirm(`Are you sure you want to delete this Document ${item.id}`)) {
    this.documentService.deleteDocument(item.id).subscribe(res => {
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


