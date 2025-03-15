import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './models/login-request';
import { Observable } from 'rxjs';
import { LoginResponse } from './models/login-response';
import { SignupRequest } from './models/signup-request';
import { SignupResponse } from './models/signup-response';

const BASE_URL = "http://localhost:8000/api";

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  constructor(private http: HttpClient) { }

  doLogin(request: LoginRequest): Observable<LoginResponse> {
    console.log("Sending Login Request:", request);
    return this.http.post<LoginResponse>(BASE_URL + "/auth/login", request);
  }

  dashboard(): Observable<any> {
    // Retrieve token from localStorage or sessionStorage
    const token = localStorage.getItem('token');

    // If no token is found, return an error or handle it
    if (!token) {
      console.error("No token found! Redirecting to login.");
      return new Observable(observer => observer.error("No token found"));
    }

    // Set Authorization header
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);

    return this.http.get<any>(BASE_URL + "/dashboard", { headers });
  }

  doRegister(request: SignupRequest): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(BASE_URL + "/auth/register/user", request);
  }
}
