// user-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('Id');
    if (id !== null) {
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  } else {
    // Handle the case when 'Id' parameter is null
  }
  }
  goBack(): void {
    this.location.back();
  }
}
