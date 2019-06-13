import { Menu } from './../../services/menus/menus.service';
import { MenusService } from '../../services/menus/menus.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuDetails: Menu = {
    title: '',
    url: ''
  }
  datasource = new MatTableDataSource();
  displayedColumns = [ "id" , "title" , "url"];
  constructor(private menus: MenusService) { }

  ngOnInit() {
    this.menus.getMenus().subscribe((data: any) => {
    this.datasource = data;
    console.log(this.datasource);
    });
  }

  addMenu(){
    this.menus.addMenu(this.menuDetails);
  }

  applyFilter(filterValue: string) {
     console.log(filterValue);
    this.datasource.filter = filterValue.trim().toLocaleLowerCase();
  }

}