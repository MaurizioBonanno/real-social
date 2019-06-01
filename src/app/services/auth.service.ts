import { Profilo } from './../interfaces/profilo';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore , AngularFirestoreDocument } from '@angular/fire/firestore';
import 'rxjs-compat/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<Profilo>;

  constructor(public afAuth: AngularFireAuth , public afs: AngularFirestore) {
    this.user$ = afAuth.authState.pipe(switchMap( user => {
      if(user){
       return this.afs.doc<Profilo>(`profili/${user.uid}`).valueChanges();
      } else {
       return Observable.of(null);
      }
    }));
  }

  loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then((credential) =>{
       this.updateUser(credential.user);
    });
  }

  updateUser(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`profili/${user.uid}`);
    const data: Profilo = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        subscriber: true,
        admin: false
      }
    }

    return userRef.set(data, {merge: true});
  };

  logOut() {
    this.afAuth.auth.signOut();
  }
}
