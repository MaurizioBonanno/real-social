import { MenusService } from './services/menus/menus.service';
import { MaterialModule } from './modules/material.module';

import { SubscriberGuard } from './guards/subscriber.guard';
import { AdminGuard } from './guards/admin.guard';
import { AuthService } from './services/auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdataComponent } from './userdata/userdata.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LoginPageComponent } from './login-page/login-page.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './admin-page/menu/menu.component';
import { PostsComponent } from './admin-page/posts/posts.component';
import { ConfirmationDialogComponent } from './admin-page/shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from './admin-page/menu/edit-menu/edit-menu.component';




@NgModule({
  declarations: [
    AppComponent,
    UserdataComponent,
    UserFormComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    LoginPageComponent,
    NavbarComponent,
    AdminPageComponent,
    MenuComponent,
    PostsComponent,
    ConfirmationDialogComponent,
    EditMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService, AdminGuard, SubscriberGuard, MenusService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent, EditMenuComponent]
})
export class AppModule { }
