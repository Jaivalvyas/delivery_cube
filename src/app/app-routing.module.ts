import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddRestuarentComponent } from './add-restuarent/add-restuarent.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminComponent } from './admin/admin.component';
import { EditRestuarentComponent } from './edit-restuarent/edit-restuarent.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OwnerComponent } from './owner/owner.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'restaurant',
    component: RestaurantComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'owner', component: OwnerComponent
  },
  {
    path: 'user', component: UserComponent
  }, {
    path: 'login', component: LoginComponent
  },
  {
    path: 'admin-view', component: AdminViewComponent
  },
  {
    path: 'add-restaurant', component: AddRestuarentComponent
  }, 
  {
    path: 'edit-restaurant/:restaurantId', component: EditRestuarentComponent
  }, 
  {
    path: 'add-menu/:restaurantId', component: AddMenuComponent
  }, 
  {
    path: 'admin', component: AdminComponent
    
  },
  {
    path: 'Forbidden', component: ForbiddenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
