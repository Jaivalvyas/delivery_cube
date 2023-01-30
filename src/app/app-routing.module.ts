import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddRestuarentComponent } from './add-restuarent/add-restuarent.component';
import { AdminViewComponent } from './view-restaurant/admin-view.component';
import { AdminComponent } from './admin/admin.component';
import { EditRestuarentComponent } from './edit-restuarent/edit-restuarent.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OwnerComponent } from './owner/owner.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ViewFavoriteComponent } from './view-favorite/view-favorite.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CheckoutComponent } from './checkout/checkout.component';

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
    path: 'edit-profile/:email', component: EditProfileComponent
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
    path: 'view-menu/:restaurantId', component: ViewMenuComponent
  },
  
  {
    path: 'view-favorite', component: ViewFavoriteComponent
  },
  {
    path: 'add-cart', component: AddToCartComponent
  },
  {
    path: 'admin', component: AdminComponent

  },
  {
    path: 'checkOut', component: CheckoutComponent

  },
  
  {
    path: 'UserProfile', component: UserProfileComponent
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
