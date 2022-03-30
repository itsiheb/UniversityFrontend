import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private instructorApiUrl = "http://localhost:8080/instructor";

  constructor(private http: HttpClient) { }

  getInstructors(){
    return this.http.get<any>(this.instructorApiUrl +'/findAllInstructors');
  }
  addInstructor(data:any){
    return this.http.post(this.instructorApiUrl + '/addInstructor', data);
  }
  updateInstructor(id:number,data:any){
    return this.http.put(this.instructorApiUrl + `/updateInstructor/${id}`,data);
  }

  deleteInstructor(id:number){
    return this.http.delete(this.instructorApiUrl + `/deleteInstructor/${id}`);
  }
 
}
