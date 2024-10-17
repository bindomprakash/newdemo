import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  constructor(){}

  onClick(val: any){
    console.log(val.value);
    
  }

  onCheckBox(checkval: any){
    console.log(checkval.checked);
    
  }

  onRadio(radioVal: any){
    console.log(radioVal);
    
  }

  onSelect(select: any){
    console.log(select.value);
    
  }
}
