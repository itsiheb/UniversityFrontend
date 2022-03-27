import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseApiUrl = "http://localhost:8080/course";

  constructor(private http: HttpClient) { }

  getcourses(){
    return this.http.get<any>(this.courseApiUrl +'/findAllCourses');
  }
  addCourse(data:any){
    return this.http.post(this.courseApiUrl + '/addCourse', data);
  }
  updateCourse(id:number,data:any){
    return this.http.put(this.courseApiUrl + `/updateCourse/${id}`,data);
  }

  deleteCourse(id:number){
    return this.http.delete(this.courseApiUrl + `/deleteCourse/${id}`);
  }
 
}
