import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentApiUrl = "http://localhost:8080/payment";

  constructor(private http: HttpClient) { }

  getPayments(){
    return this.http.get<any>(this.paymentApiUrl +'/findAllPayments');
  }
  addPayment(data:any){
    return this.http.post(this.paymentApiUrl + '/addPayment', data);
  }
  updatePayment(id:number,data:any){
    return this.http.put(this.paymentApiUrl + `/updatePayment/${id}`,data);
  }

  deletePayment(id:number){
    return this.http.delete(this.paymentApiUrl + `/deletePayment/${id}`);
  }
 
}
