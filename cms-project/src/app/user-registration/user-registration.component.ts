import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], // Add HttpClientModule to imports
  providers: [UserService] // Provide UserService here if it's not provided globally
})
export class UserRegistrationComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.userService.registerUser(userData).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          // Handle successful registration
        },
        (error) => {
          console.error('Registration error:', error);
          // Handle error
        }
      );
    }
  }
}
