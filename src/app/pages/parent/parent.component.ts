import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  userName = "shivance";
  ename = "hina";
  childData: string = "";
  @ViewChild(ChildComponent) child!: ChildComponent;

  getChildData(e: any){
    console.log(e);
    this.childData = e;
  }

  changeProperty(){
    this.child.username = "pinky";
    // alert(this.child.username);
  }

  changeMethod(){
    this.child.onSubmit();
  }
}
