import { ClassService } from './../../service/class.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  classes_table$:Observable<any[]> | undefined ;

  constructor(private classService:ClassService ) { }

  ngOnInit(): void {

    this.classes_table$ = this.classService.getClasses();
  }
  modalTitle:string = '';
  activateAddEditClassComponent:boolean = false;
  aclass:any;

  modalAdd() {
    this.aclass= {
      id:0,
      name:null,
      classEmail:null,
    }
    this.modalTitle = "Add Class";
    this.activateAddEditClassComponent = true;
  }

  modalEdit(item:any) {
    
    this.aclass = item;
    this.modalTitle = "Edit Class";
    this.activateAddEditClassComponent = true;
    
  }
  modalClose() {
    this.activateAddEditClassComponent = false;
    this.classes_table$ = this.classService.getClasses();
  }
  delete(item:any) {
    if(confirm(`Are you sure you want to delete this class ${item.id}`)) {
    this.classService.deleteClass(item.id).subscribe(res => {
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


