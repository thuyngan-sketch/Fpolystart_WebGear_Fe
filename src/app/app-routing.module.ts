import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent },
  { path: 'email', component: EmailComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'app-add-products', component: AddProductsComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'app-users', component: UsersComponent },
  { path: 'app-add-users', component: AddUsersComponent },
  { path: 'edit-users/:id', component: EditUsersComponent },
  { path: 'vouchers', component: VouchersComponent },
  { path: 'app-add-vouchers', component: AddVouchersComponent },
  { path: 'edit-vouchers', component: EditVouchersComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
