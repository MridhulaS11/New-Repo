import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { IntegrationService } from '../integration.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private integration: IntegrationService, private storage: LocalStorageService) {}

  userForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  router = inject(Router);
  request: LoginRequest = new LoginRequest();

  login() {
    this.storage.remove('auth-key');
    
    const formValue = this.userForm.value;
    console.log("From Login:", formValue);

    if (!formValue.username || !formValue.password) {
      alert('Wrong Credentials');
      return;
    }

    this.request.username = formValue.username;
    this.request.password = formValue.password;

    this.integration.doLogin(this.request).subscribe({
      next: (res) => {
        console.log("Received Response:", res.token);
        this.storage.set('auth-key', res.token);
        this.router.navigateByUrl('dashboard');
      }, 
      error: (err) => {
        console.error("Login Error:", err);
        alert("Login failed. Please check your credentials.");
        this.storage.remove('auth-key');
      }
    });
  }

  adminLogin() {
    this.storage.remove('auth-key');
    
    const formValue = this.userForm.value;
    console.log("From Login:", formValue);

    if (!formValue.username || !formValue.password) {
      alert('Wrong Credentials');
      return;
    }

    this.request.username = formValue.username;
    this.request.password = formValue.password;

    this.integration.doLogin(this.request).subscribe({
      next: (res) => {
        console.log("Admin Login Success:", res.token);
        this.storage.set('auth-key', res.token);

        this.integration.dashboard().subscribe({
          next: (dashboardres) => {
            console.log("Dashboard Response:", dashboardres.response);
            this.router.navigateByUrl('dashboard');
          },
          error: (err) => {
            console.error("Dashboard Error:", err);
            alert("Failed to fetch dashboard data.");
            this.storage.remove('auth-key');
          }
        });
      },
      error: (err) => {
        console.error("Admin Login Error:", err);
        alert("Admin login failed. Please check your credentials.");
        this.storage.remove('auth-key');
      }
    });
  }
}
