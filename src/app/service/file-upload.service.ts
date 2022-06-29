import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
    
  SERVER_URL: string = "http://localhost:8080/fileUpload/upload";  
  constructor(private httpClient:HttpClient) { }


  public upload(formData: any) {
    console.log("upload service function is called and it is being processed... !")
    console.log(formData)
    return this.httpClient.post<FormData>(this.SERVER_URL, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  
  }
}
