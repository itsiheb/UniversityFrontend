import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private examApiUrl = "http://localhost:8080/exam";

  constructor(private http: HttpClient) { }

  getExams(){
    return this.http.get<any>(this.examApiUrl +'/findAllExams');
  }
  addExam(data:any){
    return this.http.post(this.examApiUrl + '/addExam', data);
  }
  updateExam(id:number,data:any){
    return this.http.put(this.examApiUrl + `/updateExam/${id}`,data);
  }

  deleteExam(id:number){
    return this.http.delete(this.examApiUrl + `/deleteExam/${id}`);
  }
 
}
