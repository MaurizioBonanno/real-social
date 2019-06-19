import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface Posts {
  title: '';
  menu_id: '';
  content: ''
}
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs: AngularFirestore) { }

  getPosts(){
     return this.afs.collection('posts').snapshotChanges().pipe(
       map( post => {
         return post.map( p => {
           const data = p.payload.doc.data() as Posts;
           const id = p.payload.doc.id;
           return { id , ...data};
         })
       })
     )
  }//

  addPost(post: Posts){
    this.afs.collection('posts').add(post);
  }

  deletePost(idPost: string){
    this.afs.doc('/posts/'+idPost).delete();
  }

  updatePost(idPost: string, post: Posts){
    this.afs.doc('/posts/'+idPost).update(post);
  }
}
