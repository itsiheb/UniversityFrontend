import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentTimeTableService {
  private studentTimeTableApiUrl = "http://localhost:8080/studentTimetable";

  constructor(private http: HttpClient) { }

  getStudentTimeTables(){
    return this.http.get<any>(this.studentTimeTableApiUrl +'/findAllStudentTimeTables');
  }
  addStudentTimeTable(data:any){
    return this.http.post(this.studentTimeTableApiUrl + '/addStudentTimetable', data);
  }
  updateStudentTimeTable(id:number,data:any){
    return this.http.put(this.studentTimeTableApiUrl + `/updateStudentTimeTable/${id}`,data);
  }

  deleteStudentTimeTable(id:number){
    return this.http.delete(this.studentTimeTableApiUrl + `/deleteStudentTimeTable/${id}`);
  }
 
}
