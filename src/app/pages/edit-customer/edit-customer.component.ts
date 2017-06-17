import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerModel } from "app/models/customer.model";
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CustomerService } from "app/services/customer/customer.service";
import { AddressBuildingModel } from "app/models/addressBuilding.model";
import { DialogService } from "ng2-bootstrap-modal";
import { AlertComponent } from "app/components/modals/alert/alert.component";

@Component({
  selector: 'ihd-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  private customer: CustomerModel;
  private sub: any;
  private customerForm: FormGroup;
  private key:string;

  constructor(private customerService: CustomerService,
              private dialogService:DialogService,
              private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.customer = new CustomerModel('','',new AddressBuildingModel('','','',''),'','','','');
    this.customerForm = new FormGroup({
      customerName: new FormControl(this.customer.customerName,[Validators.required]),
      address: new FormGroup({
        city: new FormControl(this.customer.address.city),
        street: new FormControl(this.customer.address.street),
        buildingNumber: new FormControl(this.customer.address.buildingNumber),
        apartmentNumber: new FormControl(this.customer.address.apartmentNumber),
      }),
      phone: new FormControl(this.customer.phone),
      fax: new FormControl(this.customer.fax),
      email: new FormControl(this.customer.email, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      website: new FormControl(this.customer.website)
    });
      
    this.sub = this.route.params.subscribe(params => {
       this.key = params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
       if(this.key){
        this.customerService.getCustomer(this.key)
          .subscribe(snapshot => {
            if(snapshot.$exists()){
              console.log(snapshot.$key)
              console.log(snapshot)
              this.customer = snapshot;
              this.customer.key = snapshot.$key;
              this.customerForm.patchValue(this.customer);
            }
            else{
              this.showAlert();
            }
          });
      }
    });
  }

  saveCustomer(){
    console.log(this.customerForm.value);
    if(this.customerForm.valid){
      if(this.customer.key){
        console.log("Update");
        this.customer = this.customerForm.value as CustomerModel;
        this.customer.key = this.key;
        this.customerService.updateCustomer(this.customerForm.value)
          .then(
            res => console.log(res)
          )
          .catch(
            err => console.log(err)
          )
      } 
      else{
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
    this.dialogService.addDialog(AlertComponent, {title:'לקוח לא נמצא', message:'לקוח זה לא נמצא, חזור לעמוד הקודם.'});
  }

}
