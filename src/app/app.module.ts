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




@NgModule({
  declarations: [
    AppComponent,
    UserdataComponent,
    UserFormComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    LoginPageComponent,
    NavbarComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
