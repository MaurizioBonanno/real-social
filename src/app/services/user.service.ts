import { UserClass } from './../classi/UserClass';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersObservable: Observable<any[]>;

  users: UserClass[] = [
    {id: 1,  nome: 'Maurizio Bonanno',
    password: 'io@io.it', email: 'mbonanno@remax.it',
    tel: '3205504321', agenzia: 'specialisti', rete: 'remax'},
    {id: 2,  nome: 'Cirino Pomicino',
    password: 'io@io.it', email: 'mbonanno@remax.it',
    tel: '3205445566', agenzia: 'specialisti', rete: 'remax'}
 ];

  constructor(private db: AngularFireDatabase ) { }

  getUsers() {
    return this.users;
  }

  deleteUser(user: UserClass) {
     const index = this.users.indexOf(user);
     if (index >= 0) {
      this.users.splice(index , 1);
     }
  }

  updateUser(user: UserClass) {

    const idx = this.users.findIndex((v) => v.id === user.id);
    console.log('id trovato:' + user.id + 'nella posizione:' + idx);
    if(idx !== -1){
       this.users[idx] = user;
    }
  };

  createUser(user: UserClass){
     // uso splice , stavolta non elimino nessuno 1 parametro =0 vuol dire che è alla pos 0 dell'array
     //2 argomento =0 vuol dire che non elimino nessuno
     // 3 argomento = user
     this.users.splice(0,0,user);
  };

  getFireDatabaseUsers(){
     this.usersObservable = this.db.list('/agenti').valueChanges();
     return this.usersObservable;
  }

}
