import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Comp2Component {

  countTicket: any;
  constructor(private _authServices: AuthService) { }

  ngOnInit() {
    this.countTicket = this._authServices.getTicket();
    console.log(this.countTicket);
  }

  bookTicket(ticket: any) {
    this._authServices.bookTicket(ticket);
    this.countTicket = this._authServices.getTicket();
    console.log(this.countTicket);

  }

}
