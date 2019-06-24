import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Profilo } from '../interfaces/profilo';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  profilo: Profilo;
  userForm: FormGroup;

  constructor(private afService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.afService.user$.subscribe( user => {
      this.profilo = user;
    });

    this.userForm = this.fb.group({
      'inputEmail': ['', [ Validators.required, Validators.email ]],
      'inputPassword': ['', [ Validators.required ]]
    } );
  }

  registerUser() {
     let email = this.userForm.value['inputEmail'];
     let password = this.userForm.value['inputPassword'];
     this.afService.signWithEmailPssw(email,password);
  }

  googleLogin() {
    this.afService.loginWithGoogle();
  }

  logout() {
    this.afService.logOut();
  }

}
