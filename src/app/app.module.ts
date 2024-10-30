import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { UsersComponent } from './dashboard/users/users.component';
import { VouchersComponent } from './dashboard/vouchers/vouchers.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { AddProductsComponent } from './dashboard/products/add-products/add-products.component';
import { EditProductComponent } from './dashboard/products/edit-product/edit-product.component';
import { AddUsersComponent } from './dashboard/users/add-users/add-users.component';
import { EditUsersComponent } from './dashboard/users/edit-users/edit-users.component';
import { AddVouchersComponent } from './dashboard/vouchers/add-vouchers/add-vouchers.component';
import { EditVouchersComponent } from './dashboard/vouchers/edit-vouchers/edit-vouchers.component';
import { HomeuserComponent } from './user/homeuser/homeuser.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    EmailComponent,
    VerifyEmailComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ProductsComponent,
    OrdersComponent,
    UsersComponent,
    VouchersComponent,
    AnalyticsComponent,
    FeedbackComponent,
    SettingsComponent,
    AddProductsComponent,
    EditProductComponent,
    AddUsersComponent,
    EditUsersComponent,
    AddVouchersComponent,
    EditVouchersComponent,
    HomeuserComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
