import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { ItemsComponent } from './components/items/items.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { VendorRegistrationComponent } from './components/vendor-registration/vendor-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { VendorLoginComponent } from './components/vendor-login/vendor-login.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { VendorComponent } from './components/vendor/vendor.component';

const routes: Routes = [
  {path:'',component:StartComponent},
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'vendor',component:VendorComponent},
  {path:'vendor/list',component:ItemsComponent},
  {path:'user/register',component:UserRegistrationComponent},
  {path:'user/login',component:UserLoginComponent},
  {path:'vendor/register',component:VendorRegistrationComponent},
  {path:'vendor/login',component:VendorLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
