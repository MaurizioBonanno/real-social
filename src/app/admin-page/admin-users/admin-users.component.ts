import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Profilo } from 'src/app/interfaces/profilo';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: Profilo[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

}
