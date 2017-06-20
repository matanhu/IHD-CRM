import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'app/services/customer/customer.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'ihd-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  private customers: FirebaseListObservable<any>;
  constructor(private customerService: CustomerService) {
    this.customers = this.customerService.getAllCustomers();
    // this.getCustomers();
  }

  // refreshCustomers() {
  //   this.customerService.getAllCustomers().subscribe((sub) => {
  //     console.log(sub);
  //     this.getCustomers();
  //   });
  // }

  // getCustomers() {
  //   this.customers = this.customerService.getLocalCustomers();
  // }

  ngOnInit() {
  }

}
