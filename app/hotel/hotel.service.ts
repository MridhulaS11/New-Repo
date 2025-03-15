import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private apiUrl = 'http://localhost:8080/api/hotel';

  constructor(private http: HttpClient) {}

  getHotelDetails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/details`);
  }
}
