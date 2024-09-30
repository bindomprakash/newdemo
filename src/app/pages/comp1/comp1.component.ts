import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Comp1Component {

  searchItem: string = '';
  userObj = [
    {
      name: "omprakash",
      email: "op@gmail.com",
      address: "mirzapur"
    },
    {
      name: "sumit",
      email: "sumit@gmail.com",
      address: "allahabad"
    },
    {
      name: "shanti devi",
      email: "shanti@gmail.com",
      address: "jaunpur"
    },
    {
      name: "mohit",
      email: "mohit@gmail.com",
      address: "delhi"
    }
  ]
  countTicket: any;
  constructor(private _authServices: AuthService, private _subject: AuthService) { }

  ngOnInit() { 
    this.countTicket = this._authServices.getTicket();
    console.log(this.countTicket);

    this._authServices.subject.subscribe((res: any)=>{
      console.log(res);
      
    })
  }

  bookTicket(ticket: any) {
   this._authServices.bookTicket(ticket);
   this.countTicket = this._authServices.getTicket();
    console.log(this.countTicket);

  }

  addData(val: any){
    console.log(val.value);
    this.userObj.push({
      name: val.value,
      email: `${val.value}@gmail.com`,
      address: "varanshi"
    });
    console.log(this.userObj);
    
  }
}
