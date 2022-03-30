import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documentApiUrl = "http://localhost:8080/document";

  constructor(private http: HttpClient) { }

  getDocuments(){
    return this.http.get<any>(this.documentApiUrl +'/findAllDocuments');
  }
  addDocument(data:any){
    return this.http.post(this.documentApiUrl + '/addDocument', data);
  }
  updateDocument(id:number,data:any){
    return this.http.put(this.documentApiUrl + `/updateDocument/${id}`,data);
  }

  deleteDocument(id:number){
    return this.http.delete(this.documentApiUrl + `/deleteDocument/${id}`);
  }
 
}
