// user-create.component.ts

import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  user!: User; // Create a new instance of the User class

  constructor(private userService: UserService) {}

  createUser(): void {
    this.userService.createUser(this.user)
      .subscribe(() => {
        // Handle success, navigate to user list or display a success message
      });
  }
}
