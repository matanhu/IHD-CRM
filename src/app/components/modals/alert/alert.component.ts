import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface AlertModel {
  title: string;
  message: string;
}

@Component({
  selector: 'ihd-alert',
  template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close" (click)="goBack()" >&times;</button>
                     <h4 class="modal-title">{{title || 'Alert!'}}</h4>
                   </div>
                   <div class="modal-body">
                     <p>{{message || 'TADAA-AM!'}}</p>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="goBack()">חזור לעמוד הקודם</button>
                   </div>
                </div>
             </div>`,
  styleUrls: ['./alert.component.css']
})
export class AlertComponent  extends DialogComponent<AlertModel, null> implements AlertModel {

  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  goBack(){
    window.history.back();
  }

}


