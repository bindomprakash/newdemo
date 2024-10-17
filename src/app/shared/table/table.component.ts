import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() collname: any ; 
  @Input() colltab2: any;
  @Input() empData: any;
  @Input() userData: any

  ngOnInit() {
    console.log(this.empData);
    console.log(this.userData);
  }

}
