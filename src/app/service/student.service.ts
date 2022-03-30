import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentApiUrl = "http://localhost:8080/student";

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get<any>(this.studentApiUrl +'/findAllStudents');
  }
  addStudent(data:any){
    return this.http.post(this.studentApiUrl + '/addStudent', data);
  }
  updateStudent(id:number,data:any){
    return this.http.put(this.studentApiUrl + `/updateStudent/${id}`,data);
  }

  deleteStudent(id:number){
    return this.http.delete(this.studentApiUrl + `/deleteStudent/${id}`);
  }
 
}
