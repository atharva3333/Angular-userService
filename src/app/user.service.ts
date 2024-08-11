// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    { name: 'Ramesh', email: 'user1@example.com', password: 'password1', phoneNumber: '1234567890' },
    { name: 'John', email: 'user2@example.com', password: 'password2', phoneNumber: '9876543210' },
  ];

  checkUserExists(identifier: string): { exists: boolean, name?: string } {
    const user = this.users.find(user => user.email === identifier || user.phoneNumber === identifier);
    return { exists: !!user, name: user?.name };
  }

  validateUser(identifier: string, password: string): boolean {
    const user = this.users.find(user => user.email === identifier || user.phoneNumber === identifier);
    return user?.password === password || false;
  }
}
