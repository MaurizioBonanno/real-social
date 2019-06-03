import { AdminGuard } from './guards/admin.guard';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserdataComponent } from './userdata/userdata.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'userdata' , component: UserdataComponent},
  { path: 'admin' , component: AdminPageComponent , canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
