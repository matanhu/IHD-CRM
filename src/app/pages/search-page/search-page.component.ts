import { CustomerService } from '../../services/customer/customer.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ihd-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchString: string;
  customersList: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAllCustomers();
  }

  findCustomer() {
    this.customerService.getLocalCustomers()
      .subscribe(snapshot => {
        if (snapshot) {
          this.customersList = snapshot.filter((cust) => {
            if (cust.customerName.indexOf(this.searchString) >= 0) {
              return true;
            }
            return false;
          });
          console.log(this.customersList);
        } else {

        }
      });
  }

}
