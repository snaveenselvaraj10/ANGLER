import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' },
    { id: 3, firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com' }
  ];
  selectedUser: User = { id: 0, firstName: '', lastName: '', email: '' };
  user: User = { id: 0, firstName: '', lastName: '', email: '' };
  isEdit = false;
  isNew = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  editUser(user: User): void {
    this.selectedUser = { ...user }; // Make a copy to avoid modifying the original user
    this.isEdit = true;
    this.isNew = false;
  }

  updateUser(): void {
    this.userService.updateUser(this.selectedUser).subscribe(() => {
      this.loadUsers();
      this.cancel();
    });
  }

  addUser(): void {
    this.userService.addUser(this.user).subscribe(() => {
      this.loadUsers();
      this.cancel();
    });
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(() => {
      this.loadUsers();
    });
  }

  cancel(): void {
    this.selectedUser = { id: 0, firstName: '', lastName: '', email: '' };
    this.user = { id: 0, firstName: '', lastName: '', email: '' };
    this.isEdit = false;
    this.isNew = false;
  }
}
