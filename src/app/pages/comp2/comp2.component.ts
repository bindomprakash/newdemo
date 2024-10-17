import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, pluck } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Comp2Component implements AfterViewInit {

  countTicket: any;
  @ViewChild('myForm') myForm!: NgForm

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

  ngAfterViewInit(): void {
    const searchData = this.myForm.valueChanges;
    searchData?.pipe(
      // map(val => val['searchTerm'])
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged()
    )?.subscribe((res: any) => {
      console.log(res);
    })
  }

}
