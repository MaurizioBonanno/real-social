import { AuthService } from './../services/auth.service';
import { Profilo } from './../interfaces/profilo';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profilo: Profilo;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => this.profilo = user);//recupero i dati dell'utente
  }


}
