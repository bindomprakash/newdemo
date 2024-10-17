import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  key = "encrypt!135790";
  title = 'demo';
  isDestroy: boolean = true;
  saveItem: any[] = [];
  listIsEmpty: any;
  checkListMode: boolean = true
  listIsFull: any;
  emptyMode = true;
  setStyle: any;
  user: any;
  // searchData: any =''
  userData = [
    {
      id: 1,
      name: 'op',
      city: "mzp"
    },
    {
      id: 2,
      name: 'mohit',
      city: "mp"
    },
    {
      id: 3,
      name: 'raaz',
      city: "delhi"
    },
    {
      id: 4,
      name: 'hina',
      city: "delhi"
    },
  ]

  // @ViewChild('val') val!: ElementRef;
  listStyle: any;
  ngOnInit() {
    this.encryptLoginData("shivance");
  }

  toggleComponent() {
    this.isDestroy = !this.isDestroy
  }

  onPush(val: any) {
    // this.checkListMode = true;

    if (this.saveItem.length == 5) {
      this.listIsFull = "List is full";
      this.checkListMode = true
    }
    else {
      this.saveItem.push(val.value);
      this.emptyMode = false;
    }
  }

  onPop() {
    if (this.saveItem.length <= 0) {
      this.listIsEmpty = "List is empty.";
      this.checkListMode = false
    } else {
      this.saveItem.pop();
      this.checkListMode = false;
    }
  }

  isEmpty() {
    // console.log(">>>>>>>>>>>",this.saveItem.length);

    if (this.saveItem.length <= 0) {
      // this.checkListMode = false;
      console.log("The list is empty.");
      this.listIsEmpty = "List is empty."
    }
  }

  isListfULL() {
    console.log(this.saveItem.length);

    if (this.saveItem.length >= 6) {
      this.listIsFull = "List is full";
      console.log(this.listIsFull);

    }
  }

  deletList(index: any) {
    this.saveItem.splice(index, 1)
  }

  getDynamicStyle() {
    return {
      background: 'green',
      color: 'red'
    }
  }

  loginObject = {
    username: "",
    email: ""
  }

  encryptLoginData(val: any){
    let name = "omprakash"
    const cryptedData = CryptoJS.AES.decrypt(val, this.key);
    console.log(">>>>>>>",cryptedData);
    
  }
}
