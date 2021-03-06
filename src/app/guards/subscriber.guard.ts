import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map , take , tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriberGuard implements CanActivate {

  constructor(private af: AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.af.user$.pipe(take(1),
      map( user => user && user.roles.subscriber ? true : false),
      tap( isAdmin => {
        if(!isAdmin){
          console.error('Accesso Negato: solo subscriber');
        }
      } ))

  }
}
