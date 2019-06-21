import { MenusService } from './../../services/menus/menus.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  menu: any;
  postList: any;
  constructor(private art: ActivatedRoute, private menus: MenusService, private ps: PostsService) {
    this.art.params.subscribe( params => {
      console.log(params);
      this.menus.getSelectMenus('url', '==', params.url).subscribe(result => {
        console.log(result);
        if(result.length > 0){
           this.menu = result[0];
           this.postList = this.ps.getSelectedPosts('menu_id','==', this.menu.title).subscribe(posti => {
             console.log(posti);
             this.postList = posti;
           })
        }
      })
    });
   }

  ngOnInit() {
  }

}
