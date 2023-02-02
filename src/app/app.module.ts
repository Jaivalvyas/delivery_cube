import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminViewComponent } from './view-restaurant/admin-view.component';
import { AddRestuarentComponent } from './add-restuarent/add-restuarent.component';
import { EditRestuarentComponent } from './edit-restuarent/edit-restuarent.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ViewFavoriteComponent } from './view-favorite/view-favorite.component';
import { MatMenuModule } from '@angular/material/menu';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FooterComponent } from './footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { MatTabsModule } from '@angular/material/tabs';
import { AdminGuard } from './guards/admin.guard';
import { UserService } from './services/user.service';
import { FilterPipe } from './filter-pipe/filter.pipe';
import { OrderPlacedNotificationComponent } from './order-placed-notification/order-placed-notification.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavigationBarComponent,
    LoginComponent,
    AdminComponent,
    RestaurantComponent,
    HomeComponent,
    UserComponent,
    ForbiddenComponent,
    AdminViewComponent,
    AddRestuarentComponent,
    EditRestuarentComponent,
    AddMenuComponent,
    ViewMenuComponent,
    AddToCartComponent,
    ViewFavoriteComponent,
    EditProfileComponent,
    UserProfileComponent,
    FooterComponent,
    CheckoutComponent,
    FilterPipe,
    OrderPlacedNotificationComponent,
    OrderHistoryComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatStepperModule,
    MatSnackBarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatExpansionModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
