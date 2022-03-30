import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskApiUrl = "http://localhost:8080/task";

  constructor(private http: HttpClient) { }

  getTasks(){
    return this.http.get<any>(this.taskApiUrl +'/findAllTasks');
  }
  addTask(data:any){
    return this.http.post(this.taskApiUrl + '/addTask', data);
  }
  updateTask(id:number,data:any){
    return this.http.put(this.taskApiUrl + `/updateTask/${id}`,data);
  }

  deleteTask(id:number){
    return this.http.delete(this.taskApiUrl + `/deleteTask/${id}`);
  }
 
}
