import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerModel } from 'app/models/customer.model';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms'
import { CustomerService } from 'app/services/customer/customer.service';
import { AddressBuildingModel } from 'app/models/addressBuilding.model';
import { DialogService } from 'ng2-bootstrap-modal';
import { AlertComponent } from 'app/components/modals/alert/alert.component';
import { ContactModel } from 'app/models/contact.model';

@Component({
  selector: 'ihd-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  private customer: CustomerModel;
  private sub: any;
  private customerForm: FormGroup;
  private key: string;

  constructor(private customerService: CustomerService,
              private formBuilder: FormBuilder,
              private dialogService: DialogService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.customer = new CustomerModel('', '', new AddressBuildingModel('', '', '', ''), '', '', '', '', new Array<ContactModel>());
    this.customerForm = this.formBuilder.group({
      customerName: [this.customer.customerName, [Validators.required]],
      address: this.formBuilder.group({
        city: [this.customer.address.city],
        street: [this.customer.address.street],
        buildingNumber: [this.customer.address.buildingNumber],
        apartmentNumber: [this.customer.address.apartmentNumber],
      }),
      phone: [this.customer.phone],
      fax: [this.customer.fax],
      email: [this.customer.email, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      website: [this.customer.website],
      contacts: this.formBuilder.array([])
    });

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
            if (this.customer.contacts) {
              this.customer.contacts.forEach(contact => {
                this.addContact();
              });
            }
            this.customerForm.patchValue(this.customer);
          } else {
            this.showAlert();
          }
        });
      }
    });
  }

  saveCustomer() {
    console.log(this.customerForm.value);
    if (this.customerForm.valid) {
      if (this.customer.key) {
        console.log('Update');
        this.customer = this.customerForm.value as CustomerModel;
        this.customer.key = this.key;
        this.customerService.updateCustomer(this.customerForm.value)
          .then(
            res => console.log(res)
          )
          .catch(
            err => console.log(err)
          )
      } else {
        this.customerService.addCustomer(this.customerForm.value)
          .then(
            res => console.log(res)
          )
          .catch(
            err => console.log(err)
          )
      }
    }
  }

  showAlert() {
    this.dialogService.addDialog(AlertComponent, {title: 'לקוח לא נמצא', message: 'לקוח זה לא נמצא, חזור לעמוד הקודם.'});
  }

  iniinitContacttAddress() {
      return this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: [''],
          email: [''],
          celPhone: [''],
          phone: [''],
          address: this.formBuilder.group({
            city: [''],
            street: [''],
            buildingNumber: [''],
            apartmentNumber: [''],
          })
      });
    }

  addContact() {
    const control = <FormArray>this.customerForm.controls['contacts'];
    const addrCtrl = this.iniinitContacttAddress();

    control.push(addrCtrl);
  }

  removeContact(i: number) {
      const control = <FormArray>this.customerForm.controls['contacts'];
      control.removeAt(i);
  }

}
