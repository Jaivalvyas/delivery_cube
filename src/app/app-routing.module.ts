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
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { RoleGuard } from './guards/role.guard';
import { OrderPlacedNotificationComponent } from './order-placed-notification/order-placed-notification.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'restaurant',
    component: RestaurantComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'owner', component: OwnerComponent,
    canActivate: [UserGuard]

  },
  {
    path: 'user', component: UserComponent,
    canActivate: [UserGuard]

  }, {
    path: 'login', component: LoginComponent
  },
  {
    path: 'edit-profile/:email', component: EditProfileComponent
  },
  {
    path: 'admin-view', component: AdminViewComponent,
    canActivate: [RoleGuard]

  },
  {
    path: 'add-restaurant', component: AddRestuarentComponent,
    canActivate: [AdminGuard]

  },
  {
    path: 'edit-restaurant/:restaurantId', component: EditRestuarentComponent,

    canActivate: [AdminGuard]
  },
  {
    path: 'add-menu/:restaurantId', component: AddMenuComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'view-menu/:restaurantId', component: ViewMenuComponent,
  },

  {
    path: 'view-favorite', component: ViewFavoriteComponent,
    canActivate: [UserGuard]

  },
  {
    path: 'notification/:orderId', component: OrderPlacedNotificationComponent,

  },

  {
    path: 'add-cart', component: AddToCartComponent,
    canActivate: [UserGuard]


  },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AdminGuard]

  },
  {
    path: 'checkOut', component: CheckoutComponent,
    canActivate: [UserGuard]


  },

  {
    path: 'UserProfile', component: UserProfileComponent,
    canActivate: [RoleGuard]

  },
  {
    path: 'OrderHistory', component: OrderHistoryComponent,
  },
  {
    path: '**', component: ForbiddenComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
