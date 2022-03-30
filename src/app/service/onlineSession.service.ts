import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OnlineSessionService {
  private onlineSessionApiUrl = "http://localhost:8080/onlineSession";

  constructor(private http: HttpClient) { }

  getOnlineSessions(){
    return this.http.get<any>(this.onlineSessionApiUrl +'/findAllOnlineSessions');
  }
  addOnlineSession(data:any){
    return this.http.post(this.onlineSessionApiUrl + '/addOnlineSession', data);
  }
  updateOnlineSession(id:number,data:any){
    return this.http.put(this.onlineSessionApiUrl + `/updateOnlineSession/${id}`,data);
  }

  deleteOnlineSession(id:number){
    return this.http.delete(this.onlineSessionApiUrl + `/deleteOnlineSession/${id}`);
  }
 
}
