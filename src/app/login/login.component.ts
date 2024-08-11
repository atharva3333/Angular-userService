import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userName: string = '';
  email: string = '';
  password: string = '';
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false; // New flag for error message

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userName = sessionStorage.getItem('userName') || 'Guest';
  }

  onSubmit() {
    if (this.userService.validateUser(this.email, this.password)) {
      this.showSuccessMessage = true;
      this.showErrorMessage = false; // Hide error message on successful login
      this.email = '';
      this.password = '';
    } else {
      this.showSuccessMessage = false; // Hide success message if login fails
      this.showErrorMessage = true; // Show error message
    }
  }
}
