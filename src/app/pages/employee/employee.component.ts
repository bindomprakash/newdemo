import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  myForm!: FormGroup;
  nameNotAllow = ['omprakash', 'pinky'];

  constructor(private fb: FormBuilder) { }

  createForm() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, this.notAllow.bind(this)]],
      checkme: ['', [Validators.requiredTrue]],
      gender: ['', [Validators.requiredTrue]]
    })
  }

  ngOnInit(){
    this.createForm();
  }

  onSubmit() {
   if(this.myForm.valid){
    return;
   }
   
   alert("hi");
   console.log(">>>>>>>>>",this.myForm.value);
  }

  notAllow(val: FormControl){
    console.log(val);
    
    if(this.nameNotAllow.indexOf(val.value) !== -1){
      return {'nameIsNotAllow': true}
    }
    return null;
  }
}
