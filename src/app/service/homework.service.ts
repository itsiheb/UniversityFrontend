import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  private homeworkApiUrl = "http://localhost:8080/homework";

  constructor(private http: HttpClient) { }

  getHomeworks(){
    return this.http.get<any>(this.homeworkApiUrl +'/findAllHomeworks');
  }
  addHomework(data:any){
    return this.http.post(this.homeworkApiUrl + '/addHomework', data);
  }
  updateHomework(id:number,data:any){
    return this.http.put(this.homeworkApiUrl + `/updateHomework/${id}`,data);
  }

  deleteHomework(id:number){
    return this.http.delete(this.homeworkApiUrl + `/deleteHomework/${id}`);
  }
 
}
