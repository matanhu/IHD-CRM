import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { routing } from './app.routes';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { AlertComponent } from './components/modals/alert/alert.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { DisplayCustomerComponent } from './pages/display-customer/display-customer.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthGuard } from './services/authguard/authguard.service';
import { CustomerService } from './services/customer/customer.service';
import { DisplayContactComponent } from './components/display-contact/display-contact.component';
import { ContactTooltipDirective } from './directives/contact-tooltip/contact-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditCustomerComponent,
    CustomersListComponent,
    HomePageComponent,
    AlertComponent,
    DisplayCustomerComponent,
    EditContactComponent,
    LoginComponent,
    DisplayContactComponent,
    ContactTooltipDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'IHD-CRM'),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    routing,
    BootstrapModalModule,
    FormsModule
  ],
  entryComponents: [
    AlertComponent
  ],
  providers: [
    CustomerService,
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
