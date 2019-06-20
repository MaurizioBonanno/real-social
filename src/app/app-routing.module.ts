import { PostsComponent } from './admin-page/posts/posts.component';

import { AdminGuard } from './guards/admin.guard';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserdataComponent } from './userdata/userdata.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriberGuard } from './guards/subscriber.guard';
import { PagesComponent } from './front-page/pages/pages.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'userdata' , component: UserdataComponent},
  { path: 'admin' , component: AdminPageComponent , canActivate: [AdminGuard]},
  { path: 'posts', component: PostsComponent , canActivate: [AdminGuard]},
  { path: 'page/:url', component: PagesComponent , canActivate: [SubscriberGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
