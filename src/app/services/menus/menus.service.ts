import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface Menu {
  title: '';
  url: '';
}
@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private afs: AngularFirestore) { }

  getMenus() {
    return this.afs.collection('menus').snapshotChanges().pipe(
      map( menu => {
           return menu.map(a => {
             const data = a.payload.doc.data() as Menu;
             const id = a.payload.doc.id ;
             return { id, ...data};
           })
      }))

  }

  getSelectMenus(field: string, condition: any, value: string) {
    return this.afs.collection('menus', ref => ref.where(field, condition , value )).snapshotChanges().pipe(
      map( menu => {
           return menu.map(a => {
             const data = a.payload.doc.data() as Menu;
             const id = a.payload.doc.id ;
             return { id, ...data};
           })
      }))

  }

  addMenu(menu: Menu) {
     this.afs.collection('menus').add(menu);
  }

  deleteMenu(menuId) {
     this.afs.doc('menus/'+menuId).delete();
  }

  updateMenu(menuId, menu: Menu) {
    this.afs.doc('/menus/'+menuId).update(menu);
  }
}
