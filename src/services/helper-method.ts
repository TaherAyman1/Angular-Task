import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HelpermethodsService {
  constructor(
    public spinner: NgxSpinnerService,
    public toastrService: ToastrService
  ) {}

  // present toastr
  presentToast(message) {
    this.toastrService.success(message);
  }

  // present spinner
  presentLoading() {
    this.spinner.show();
  }
  // hide spinner
  dismissLoading() {
    this.spinner.hide();
  }
}
