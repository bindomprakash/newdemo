import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { interval, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  ename = "hina";
  childData: string = "";
  userName: string = "shivance";
  subscription!: Subscription;

  @ViewChild(ChildComponent) child!: ChildComponent;

  constructor() { }

  ngOnInit() {
    const obs = interval(1000);
    this.subscription = obs.subscribe((res: any) => {
      console.log("Video: ", res);
      if (res >= 5) {
        this.subscription.unsubscribe()
      }
    })

  }

  getChildData(e: any) {
    console.log(e);
    this.childData = e;
  }

  changeProperty() {
    this.child.username = "pinky";
    // alert(this.child.username);
    this.userName = "dinesh singh"
  }

  changeMethod() {
    this.child.onSubmit();
    this.userName = "dinesh singh"
  }

}

