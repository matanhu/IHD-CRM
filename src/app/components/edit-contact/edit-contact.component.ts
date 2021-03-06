import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ihd-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('ihdContactFormGroup')
  contactFormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
