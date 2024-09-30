import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userData: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/data.json').subscribe((res: any) => {
      this.userData = res[0].product;
      console.log(">>>>>>>>",this.userData);
      
    },
      (err) => {
        console.log("Something is wrong..");

      }
    )
  }
}
