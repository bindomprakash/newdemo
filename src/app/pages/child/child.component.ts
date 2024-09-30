import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  childName = "child to parents";
  username = "default value";

  @Input() myname!: string;
  @Output() sentValue = new EventEmitter();

  ngOnInit(){
  }

  onSubmit(){
    //  this.username = "default value";
    // this.sentValue.emit(this.childName);
    alert(this.username)
  }
}
