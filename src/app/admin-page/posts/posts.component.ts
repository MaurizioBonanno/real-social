import { MenusService } from './../../services/menus/menus.service';
import { PostsService, Posts } from './../../services/posts/posts.service';
import { EditPostsComponent } from './edit-posts/edit-posts.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  postDetails: Posts = {
    title: '',
    menu_id: '',
    content: ''
  }

  menuList: any;
  datasource = new MatTableDataSource<Posts>();
  displayedColumns = [ 'id' , 'title' , 'menu_id' ,'content', 'azioni'];


  constructor(private posts: PostsService, private ms: MenusService, public dialog: MatDialog) { }

  ngOnInit() {
    this.posts.getPosts().subscribe((data: any) => {
    this.datasource.data = data;
    });

    this.ms.getMenus().subscribe((data: any)=>{
      this.menuList = data;
    })
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  addpost(){
    this.posts.addPost(this.postDetails);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLocaleLowerCase();
    this.datasource.filter = filterValue.trim();
    console.log(filterValue);
  }

  edit_post(id: string, post: Posts) {
    this.posts.updatePost(id, post);
  }//

  delete_post(id: string) {
    this.posts.deletePost(id);
  }//

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result==='true'){
        this.delete_post(id);
      }
    });
  }//

  openEditDialog(id: string,title: string , content : string, menu_id: string): void {
    const dialogRef = this.dialog.open(EditPostsComponent, {
      width: '250px',
      data: { title , content, menu_id, 'menus': this.menuList }
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result){
        this.edit_post(id,result);
      }
    });
  }//

}
