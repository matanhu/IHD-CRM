import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { routing } from './app.routes';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { CustomerService } from './services/customer/customer.service';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AlertComponent } from './components/modals/alert/alert.component';
import { DisplayCustomerComponent } from './pages/display-customer/display-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditCustomerComponent,
    CustomersListComponent,
    HomePageComponent,
    AlertComponent,
    DisplayCustomerComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'IHD-CRM'),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    routing,
    BootstrapModalModule
  ],
  entryComponents: [
    AlertComponent
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
