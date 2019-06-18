import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { ConfirmationDialogComponent } from './../shared/confirmation-dialog/confirmation-dialog.component';
import { Menu } from './../../services/menus/menus.service';
import { MenusService } from '../../services/menus/menus.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  menuDetails: Menu = {
    title: '',
    url: ''
  }
  datasource = new MatTableDataSource<Menu>();
  displayedColumns = [ 'id' , 'title' , 'url' , 'azioni'];


  constructor(private menus: MenusService, public dialog: MatDialog) { }

  ngOnInit() {
    this.menus.getMenus().subscribe((data: any) => {
    this.datasource.data = data;
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  addMenu(){
    this.menus.addMenu(this.menuDetails);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLocaleLowerCase();
    this.datasource.filter = filterValue.trim();
    console.log(filterValue);
  }

  edit_menu(id: string, menu: Menu) {
    this.menus.updateMenu(id,menu);
  }

  delete_menu(id: string) {
    this.menus.deleteMenu(id);
  }

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result==='true'){
        this.delete_menu(id);
      }
    });
  }

  openEditDialog(id: string,title: string , url : string): void {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      width: '250px',
      data: { title: title , url: url }
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result){
        this.edit_menu(id,result);
      }
    });
  }

}
