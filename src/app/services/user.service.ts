import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserClass } from '../classi/UserClass';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Profilo } from '../interfaces/profilo';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersObservable: Observable<any[]>;

  users: Profilo[];

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore ) { }

  getUsers() {
    return this.afs.collection('profili').snapshotChanges().pipe(
      map( profilo => {
        return profilo.map( a => {
          const data = a.payload.doc.data() as Profilo;
          const id = a.payload.doc.id;
          return { id , ...data };
        });
      })
    );
  }

  deleteUser(id: string) {
     this.afs.collection('profili').doc(id).delete().then(() => {
       console.log('utente cancellato');
     }).catch((error) => {
       console.log(error);
     });
  }

  updateUser(id: string, user: Profilo) {
     this.afs.doc('/profili/' + id).update(user);
  };

  createUser(user: Profilo){
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
