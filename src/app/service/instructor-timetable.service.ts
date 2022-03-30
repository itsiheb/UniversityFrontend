import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InstructorTimeTableService {
  private instructorTimeTableApiUrl = "http://localhost:8080/instructorTimetable";

  constructor(private http: HttpClient) { }

  getInstructorTimeTables(){
    return this.http.get<any>(this.instructorTimeTableApiUrl +'/findAllInstructorTimeTables');
  }
  addInstructorTimeTable(data:any){
    return this.http.post(this.instructorTimeTableApiUrl + '/addInstructorTimeTable', data);
  }
  updateInstructorTimeTable(id:number,data:any){
    return this.http.put(this.instructorTimeTableApiUrl + `/updateInstructorTimeTable/${id}`,data);
  }

  deleteInstructorTimeTable(id:number){
    return this.http.delete(this.instructorTimeTableApiUrl + `/deleteInstructorTimeTable/${id}`);
  }
 
}
