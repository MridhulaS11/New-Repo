import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Interface for Reservation model
export interface Reservation {
  reservationId?: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkInDate: string;
  checkOutDate: string;
  roomId: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8000/api/reservation'; // Backend API URL

  constructor(private http: HttpClient) {}

  // ✅ Fetch all reservations
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/all`).pipe(
      catchError(this.handleError)
    );
  }

  // ✅ Create a new reservation
  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/post`, reservation).pipe(
      catchError(this.handleError)
    );
  }

  // ✅ Delete a reservation
  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // ✅ Handle errors
  private handleError(error: HttpErrorResponse) {
    console.error('Reservation Service Error:', error);
    return throwError(() => new Error('Something went wrong! Please try again.'));
  }
}
