import { Component } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component {

  collName2 = ["Name", "City", "Address", "Currency"];
  userDatas: User[] = [
    {
      name: "rajesh patel",
      city: "jaunpur",
      address: "varanshi",
      currency: "$200",
    },
    {
      name: "rajesh patel",
      city: "jaunpur",
      address: "varanshi",
      currency: "$200"
    },
    {
      name: "rajesh patel",
      city: "jaunpur",
      address: "varanshi",
      currency: "$200"
    },
    {
      name: "rajesh patel",
      city: "jaunpur",
      address: "varanshi",
      currency: "$200"
    },
    {
      name: "rajesh patel",
      city: "jaunpur",
      address: "varanshi",
      currency: "$200"
    },
    {
      name: "rajesh patel",
      city: "jaunpur",
      address: "varanshi",
      currency: "$200"
    },
    {
      name: "rajesh patel",
      city: "jaunpur",
      address: "varanshi",
      currency: "$200"
    }
  ]
}
