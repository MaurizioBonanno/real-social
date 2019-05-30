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

  saveUser(){
    if(confirm('sei sicuro di vole salvare i dati')){
    if(this.user.id > 0){ //id è > 0 quindi è un update
        this.us.updateUser(this.user);
    }else{
      //crea un nuovo utente
      this.us.createUser(this.user);
    }
  }
  };

  resetForm(form) {
    form.reset();
  }

}
