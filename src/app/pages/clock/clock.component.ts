import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  date!: Date;
  interval: any;

  ngOnInit(): void {
    this.interval = window.setInterval(() => {
      this.date = new Date();
      console.log(this.date);
    }, 1000)
  }

  ngOnDestroy(): void {
     clearInterval(this.interval)
    // console.log("ondestroy is calling...");
  }

}
