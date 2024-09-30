import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm !: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if(!this.myForm.valid){
      return
    }
    this.router.navigateByUrl('dashboard');
    console.log("login component..");
    // this.router.navigate(['dashboard']);
    // localStorage.setItem('token', this.myForm.value.fname);
    console.log(this.myForm.value);
  }
}
