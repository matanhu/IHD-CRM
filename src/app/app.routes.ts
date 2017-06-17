import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "app/app.component";
import { CustomersListComponent } from "app/pages/customers-list/customers-list.component";
import { EditCustomerComponent } from "app/pages/edit-customer/edit-customer.component";
import { HomePageComponent } from "app/pages/home-page/home-page.component";
import { DisplayCustomerComponent } from "app/pages/display-customer/display-customer.component";

export const routes: Routes = [
    { path: '', component: HomePageComponent, pathMatch: 'full'},
    { path: 'customer/:id', component: DisplayCustomerComponent, pathMatch: 'full'},
    { path: 'customers-list', component: CustomersListComponent, pathMatch: 'full'},
    { path: 'newCustomer', component: EditCustomerComponent},
    { path: 'editCustomer/:id', component: EditCustomerComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);