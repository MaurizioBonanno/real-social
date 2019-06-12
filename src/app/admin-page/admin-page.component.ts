import { PostsComponent } from './posts/posts.component';
import { MenuComponent } from './menu/menu.component';
import { Profilo } from './../interfaces/profilo';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  profilo: Profilo;
  links = [
    {
      name: 'Menu',
      link: '/menu',
    },
    {
      name: 'Post',
      link: '/post',
    }
  ];

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => this.profilo = user);
  }

}
