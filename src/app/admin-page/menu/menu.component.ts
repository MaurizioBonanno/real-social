import { Menu } from './../../services/menus/menus.service';
import { MenusService } from '../../services/menus/menus.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  menuDetails: Menu = {
    title: '',
    url: ''
  }
  datasource = new MatTableDataSource<Menu>();
  displayedColumns = [ 'id' , 'title' , 'url'];
  constructor(private menus: MenusService) { }

  ngOnInit() {
    this.menus.getMenus().subscribe((data: any) => {
    this.datasource.data = data;
    });
  }

  ngAfterViewInit() {
    this.datasource.sort = this.sort;
  }

  addMenu(){
    this.menus.addMenu(this.menuDetails);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLocaleLowerCase();
    this.datasource.filter = filterValue.trim();
    console.log(filterValue);
  }

}
