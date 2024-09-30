import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  productData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/data.json').subscribe((res: any) => {
      this.productData = res[0].customer;
      console.log(this.productData);
    })
  }
}
