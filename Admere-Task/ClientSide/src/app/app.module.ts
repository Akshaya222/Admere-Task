import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { ItemsComponent } from './components/items/items.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { VendorRegistrationComponent } from './components/vendor-registration/vendor-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { VendorLoginComponent } from './components/vendor-login/vendor-login.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { VendorComponent } from './components/vendor/vendor.component';

import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import {UserService} from './services/user.service';
import {VendorService} from './services/vendor.service';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ItemsComponent,
    UserRegistrationComponent,
    VendorRegistrationComponent,
    UserLoginComponent,
    VendorLoginComponent,
    HomeComponent,
    UserComponent,
    VendorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,
             VendorService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
