import { ContactModel } from '../../models/contact.model';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ihd-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent implements OnInit {

  @Input()
  contactList: Array<ContactModel>;

  constructor() { }

  ngOnInit() {
    console.log(this.contactList);
  }

}
