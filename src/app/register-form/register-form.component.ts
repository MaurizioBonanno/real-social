import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profilo } from '../interfaces/profilo';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  profilo: Profilo;

  constructor(private afService: AuthService) { }

  ngOnInit() {
    this.afService.user$.subscribe( user => {
      this.profilo = user;
    });
  }

  registerUser(form: NgForm) {

  }

  googleLogin() {
    this.afService.loginWithGoogle();
  }

  logout() {
    this.afService.logOut();
  }

}
