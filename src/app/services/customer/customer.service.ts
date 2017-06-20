import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { CustomerModel } from 'app/models/customer.model';

@Injectable()
export class CustomerService {

  customers;

  constructor(private db: AngularFireDatabase) { }

  addCustomer(customer: CustomerModel) {
    const customers = this.db.list('/Customers');
    return customers.push(customer);
  }

  getAllCustomers() {
    const customers = this.db.list('/Customers');
    // return customers.map((res) => {
    //   console.log(res);
    //   this.customers = res;
    //   return res;
    // });
    return customers;
  }

  getCustomer(key: string) {
    return this.db.object('/Customers/' + key);
  }

  updateCustomer(customer: CustomerModel) {
    const customers = this.db.list('/Customers');
    return customers.update(customer.key, customer);
  }

  getLocalCustomers() {
    return this.customers;
  }
}
