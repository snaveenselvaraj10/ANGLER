import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  userForm: User = { id: 0, firstName: '', lastName:'', email: '' };
  showForm: boolean = false;
  isEdit: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  editUser(user: User): void {
    this.userForm = { ...user };
    this.showForm = true;
    this.isEdit = true;
  }

  submitForm(): void {
    if (this.isEdit) {
      this.userService.updateUser(this.userForm).subscribe(() => {
        this.loadUsers();
        this.resetForm();
      });
    } else {
      this.userService.addUser(this.userForm).subscribe(() => {
        this.loadUsers();
        this.resetForm();
      });
    }
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(() => {
        this.loadUsers();
      });
    }
  }

  resetForm(): void {
    this.userForm = { id: 0, firstName: '',  lastName:'', email: '' };
    this.showForm = false;
    this.isEdit = false;
  }
}
