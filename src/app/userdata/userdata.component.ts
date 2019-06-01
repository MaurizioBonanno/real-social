import { UserClass } from './../classi/UserClass';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  showForm = false;
  userSelected: UserClass = new UserClass(); // questo è l'utente selezionato dalla lista che può essere aggiornato e cancellato
  usersFireDatabase$: Observable<User>;
  users: Observable<any[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getFireDatabaseUsers()
  }

  updateUser(user) {

      console.log('update:' + user.nome);
      const userCopy = Object.assign({},user);
      this.userSelected = userCopy;
      this.showForm = true;
  }

  deleteUser(user){
    if(confirm('vuoi cancellare :' + user.nome)){
      console.log('delete:' + user.nome);
      this.userService.deleteUser(user);

    }

  };

  newUser(){
    this.userSelected = new UserClass();
    this.showForm = true;
  };

}
