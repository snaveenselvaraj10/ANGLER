// user-list.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[]=[];
  

  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(response=>{
      console.log(response);
      this.users=response;
 })
}
}
