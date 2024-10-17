import { Component } from '@angular/core';
import { ValidDirective } from 'src/app/directives/valid.directive';
import { Emp } from 'src/app/emp';

@Component({
  selector: 'app-commontable',
  templateUrl: './commontable.component.html',
  styleUrls: ['./commontable.component.css']
})
export class CommontableComponent {

  collName = ["FirstName", "LastName", "Email"];
  empDatas : Emp[] = [
    {
      firstName: "omprakash",
      lastName: "bind",
      email: "op@gmail.com",
    },
    {
      firstName: "omprakash",
      lastName: "bind",
      email: "op@gmail.com"
    },
    {
      firstName: "omprakash",
      lastName: "bind",
      email: "op@gmail.com"
    },
    {
      firstName: "omprakash",
      lastName: "bind",
      email: "op@gmail.com"
    },
    {
      firstName: "omprakash",
      lastName: "bind",
      email: "op@gmail.com"
    },
    {
      firstName: "omprakash",
      lastName: "bind",
      email: "op@gmail.com"
    },
  ]
}
