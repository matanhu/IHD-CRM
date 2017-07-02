import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { CustomerModel } from 'app/models/customer.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CustomerService {

  customers;

  constructor(private db: AngularFireDatabase) { }

  addCustomer(customer: CustomerModel) {
    const customers = this.db.list('/Customers');
    return customers.push(customer);
  }

  getAllCustomers() {
    this.customers = this.db.list('/Customers');
    // return customers.map((res) => {
    //   console.log(res);
    //   this.customers = res;
    //   return res;
    // });
    return this.customers;
  }

  getCustomer(key: string) {
    return this.db.object('/Customers/' + key);
  }

  updateCustomer(customer: CustomerModel) {
    const customers = this.db.list('/Customers');
    return customers.update(customer.key, customer);
  }

  findCustomer(name: string) {
    return this.db.list('/Customers', {
      query: {
        orderByChild: 'customerName',
        equalTo: name
      }
    });
  }

  getLocalCustomers(): Observable<any[]> {
    return this.customers;
  }
}
