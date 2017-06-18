import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'app/services/customer/customer.service';
import { DialogService } from 'ng2-bootstrap-modal';
import { CustomerModel } from 'app/models/customer.model';
import { AddressBuildingModel } from 'app/models/addressBuilding.model';
import { AlertComponent } from 'app/components/modals/alert/alert.component';
import { ContactModel } from 'app/models/contact.model';

@Component({
  selector: 'ihd-display-customer',
  templateUrl: './display-customer.component.html',
  styleUrls: ['./display-customer.component.css']
})
export class DisplayCustomerComponent implements OnInit {

  private customer: CustomerModel;
  private sub: any;
  private key: string;

  constructor(private customerService: CustomerService,
              private dialogService: DialogService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.customer = new CustomerModel('', '', new AddressBuildingModel('', '', '', ''), '', '', '', '', new Array<ContactModel>());
    this.sub = this.route.params.subscribe(params => {
       this.key = params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
       if (this.key) {
        this.customerService.getCustomer(this.key)
          .subscribe(snapshot => {
            if (snapshot.$exists()) {
              console.log(snapshot.$key)
              console.log(snapshot)
              this.customer = snapshot;
              this.customer.key = snapshot.$key;
            } else {
              this.showAlert();
            }
          });
      }
    });
  }

  showAlert() {
    this.dialogService.addDialog(AlertComponent, {title: 'לקוח לא נמצא', message: 'לקוח זה לא נמצא, חזור לעמוד הקודם.'});
  }

}
