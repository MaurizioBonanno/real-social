import { UserService } from './../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Profilo } from 'src/app/interfaces/profilo';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { EditUserComponentComponent } from './edit-user-component/edit-user-component.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  users: Profilo[];
  datasource = new MatTableDataSource<Profilo>();
  displayedColumns = ['Photo' , 'Name' , 'Email' , 'Permessi', 'Azioni'];

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.datasource.data = this.users = data;
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  applyFilter( filter: string){
    filter = filter.trim().toLocaleLowerCase();
    this.datasource.filter = filter;
  }

  deleteUser(id: string ){
    this.userService.deleteUser(id);
  }



  openDialog(id: string): void {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result==='true'){
        this.deleteUser(id);
      }
    });

  }

  openEditDialog (profilo: Profilo ){
    // tslint:disable-next-line:label-position
    const fakeProfilo: Profilo = {
      uid: profilo.uid,
      email: profilo.email,
      displayName: profilo.displayName,
      photoURL: profilo.photoURL,
      roles: {
        subscriber: true,
        admin: profilo.roles.admin
      }
    }
     console.log(profilo);
     const dialogRef = this.dialog.open(EditUserComponentComponent, {
      width: '250px',
      data: fakeProfilo
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result){
        this.editProfilo(result);
      }
    });
  }

  editProfilo(profilo: Profilo){
     this.userService.updateUser(profilo.uid, profilo);
  }

}
