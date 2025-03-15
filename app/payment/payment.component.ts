import { Component, OnInit } from '@angular/core';
import { Payment, PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payments: Payment[] = [];
  newPayment: Payment = { paymentId: 0, reservationId: 0, amount: 0, paymentDate: '', paymentStatus: '' };

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.loadPayments();
  }

  loadPayments(): void {
    this.paymentService.getAllPayments().subscribe(data => {
      this.payments = data;
    });
  }

  addPayment(): void {
    if (!this.newPayment.amount) {
      alert("Amount is required.");
      return;
    }
  
    this.newPayment.paymentStatus = "Processing"; // Set status before sending request
  
    this.paymentService.createPayment(this.newPayment).subscribe({
      next: (response) => {
        this.newPayment.paymentStatus = "Payment Successful";
        alert("Payment Successful!");
        this.loadPayments();
      },
      error: (error) => {
        alert("Payment failed: " + error.error.message);
      }
    });
  }
  
  deletePayment(id: number): void {
    this.paymentService.deletePayment(id).subscribe(() => {
      this.loadPayments();
    });
  }
}
