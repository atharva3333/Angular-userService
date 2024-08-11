// common.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent {
  email: string = '';
  phoneNumber: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    const identifier = this.email || this.phoneNumber;
    const { exists, name } = this.userService.checkUserExists(identifier);

    if (exists) {
      // Store user name in session or some global state
      sessionStorage.setItem('userName', name || ''); 
      this.router.navigate(['/login']);  // Redirect to login page
    } else {
      this.router.navigate(['/signup']); // Redirect to signup page
    }
  }
}
