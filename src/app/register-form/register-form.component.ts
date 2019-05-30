import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private afService: AuthService) { }

  ngOnInit() {
  }

  registerUser(form: NgForm){

  }

  googleLogin(){
    this.afService.loginWithGoogle();
  }

  logout(){
    this.afService.logOut();
  }

}
