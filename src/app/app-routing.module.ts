import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OwnerComponent } from './owner/owner.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'restaurant',
    component:RestaurantComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'owner',component:OwnerComponent
  },
  {
    path:'user',component:UserComponent
  },{
    path:'login',component:LoginComponent
  },
  {
    path:'admin',component:AdminComponent
  },{
    path:'Forbidden',component:ForbiddenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
