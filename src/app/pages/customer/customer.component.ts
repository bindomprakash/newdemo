import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comp1Component } from '../comp1/comp1.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {

  @ViewChild('txt') txt !: ElementRef;
  @ViewChild(Comp1Component) comp!: Comp1Component;

  obj = {
    key1: 1,
    key2: 2,
    key3: 3
  }

  obj1 = {
    key1: 1,
    key2: 2,
    key3: 3
  }

  arr: any[] = [];

  constructor(private activateToute: ActivatedRoute, private comp1: Comp1Component) { }

  ngOnInit() {
    this.activateToute.paramMap.subscribe((res: any) => {
      console.log("RES: ", res.params.token);
      console.log(">>>>>>>>",this.comp1);
    })

    // console.log(this.txt);
  }

  onSubmit() {
     console.log(this.obj, this.obj1);
  }

}
