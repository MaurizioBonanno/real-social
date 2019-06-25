import { UserService } from './../services/user.service';
import { UserClass } from './../classi/UserClass';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user: UserClass;

  constructor(private us: UserService) { }

  ngOnInit() {
  }
}
