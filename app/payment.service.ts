import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Payment {
  paymentId: number;
  reservationId: number;
  amount: number;
  paymentDate: string;
  paymentStatus: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:8000/api/payment';

  constructor(private http: HttpClient) {}

  getAllPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiUrl}/all`);
  }

  getPaymentById(paymentId: number): Observable<Payment> {
    return this.http.get<Payment>(`${this.apiUrl}/${paymentId}`);
  }

  createPayment(payment: Payment): Observable<any> {
    return this.http.post(`${this.apiUrl}/post`, payment);
  }

  updatePayment(paymentId: number, payment: Payment): Observable<any> {
    return this.http.put(`${this.apiUrl}/${paymentId}`, payment);
  }

  deletePayment(paymentId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${paymentId}`);
  }
}
