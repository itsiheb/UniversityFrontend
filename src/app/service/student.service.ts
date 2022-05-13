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
  addStudent(class_id:number,data:any){
    return this.http.post(this.studentApiUrl + `/addStudentWithClass/${class_id}`, data);
  }
  updateStudent(class_id:number,id:number,data:any){
    return this.http.put(this.studentApiUrl + `/updateStudentWithClass/${class_id}/${id}`,data);
  }

  deleteStudent(id:number){
    return this.http.delete(this.studentApiUrl + `/deleteStudent/${id}`);
  }
 
}
