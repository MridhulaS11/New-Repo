import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IntegrationService } from '../integration.service';
import { LocalStorageService } from '../local-storage.service';
import { SignupRequest } from '../models/signup-request';
import { CommonModule } from '@angular/common';
import { SignupResponse } from '../models/signup-response'; // ✅ Ensure correct import

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  msg: string | undefined;
  request: SignupRequest = new SignupRequest();

  signupForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    mobileno: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required)
  });

  constructor(
    private integrationService: IntegrationService,
    private storage: LocalStorageService,
    private router: Router
  ) {}

  public onSubmit() {
    if (this.signupForm.invalid) {
      console.log("Form submission failed due to invalid fields.");
      return;
    }
  
    this.storage.remove('auth-key');
  
    const formValue = this.signupForm.value;
    this.request = { ...formValue };
  
    console.log("Submitting Signup Request:", this.request);
  
    this.integrationService.doRegister(this.request).subscribe({
      next: (res: SignupResponse) => {
        console.log("Signup Response:", res);
  
        if (res.success) {
          this.msg = res.message; // ✅ Success message
          setTimeout(() => {
            this.router.navigate(['/login']); // ✅ Redirect to login page
          }, 2000); // Wait 2 seconds before redirecting
        } else {
          this.msg = "Registration successful.";
          setTimeout(() => {
            this.router.navigate(['/login']); // ✅ Redirect to login page
          }, 2000);
        }
      },
      error: (err) => {
        console.error("Error Received:", err);
        this.msg = err.error?.message || "Registration failed. Please try again.";
      }
    });
  }
  
  
  }
