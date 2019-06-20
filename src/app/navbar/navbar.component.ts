import { MenusService } from './../services/menus/menus.service';

import { AuthService } from './../services/auth.service';
import { Profilo } from './../interfaces/profilo';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profilo: Profilo;
  menuList: any;
  constructor(public authService: AuthService, private menus: MenusService) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => this.profilo = user);//recupero i dati dell'utente
    this.menus.getMenus().subscribe(menus=>{
      this.menuList = menus;
    });
  }


}
