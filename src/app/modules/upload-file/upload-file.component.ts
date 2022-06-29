import { FileUploadService } from './../../service/file-upload.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
 

  constructor(private fileUploadService:FileUploadService) { }


  ngOnInit(): void {}
  
}


  