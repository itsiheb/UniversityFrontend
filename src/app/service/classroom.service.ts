import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  private classroomApiUrl = "http://localhost:8080/classroom";

  constructor(private http: HttpClient) { }

  getclassrooms(){
    return this.http.get<any>(this.classroomApiUrl +'/findAllClassrooms');
  }
  addclassroom(data:any){
    return this.http.post(this.classroomApiUrl + '/addClassroom', data);
  }
  updateclassroom(id:number,data:any){
    return this.http.put(this.classroomApiUrl + `/updateClassroom/${id}`,data);
  }

  deleteclassroom(id:number){
    return this.http.delete(this.classroomApiUrl + `/deleteClassroom/${id}`);
  }
 
}
