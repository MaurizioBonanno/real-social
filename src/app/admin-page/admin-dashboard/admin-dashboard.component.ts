import { AuthService } from './../../services/auth.service';
import { Profilo } from './../../interfaces/profilo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  profilo: Profilo;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => this.profilo = user);
  }

}
