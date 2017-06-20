import { AuthGuard } from './services/authguard/authguard.service';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { CustomersListComponent } from 'app/pages/customers-list/customers-list.component';
import { EditCustomerComponent } from 'app/pages/edit-customer/edit-customer.component';
import { HomePageComponent } from 'app/pages/home-page/home-page.component';
import { DisplayCustomerComponent } from 'app/pages/display-customer/display-customer.component';
import { LoginComponent } from 'app/pages/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomePageComponent, canActivate: [AuthGuard], children: [
        { path: 'customer/:id', component: DisplayCustomerComponent, canActivate: [AuthGuard]},
        { path: 'customers-list', component: CustomersListComponent, canActivate: [AuthGuard]},
        { path: 'newCustomer', component: EditCustomerComponent, canActivate: [AuthGuard]},
        { path: 'editCustomer/:id', component: EditCustomerComponent, canActivate: [AuthGuard]}
    ]},
    { path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
