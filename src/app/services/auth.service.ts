import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
  {
     providedIn: 'root'
  }
)
export class AuthService {

  saveTicket: any[] = [100];

  subject = new BehaviorSubject("hello omprakash bind");

  constructor() { }

  bookTicket(ticket: any) {
    this.saveTicket.push(ticket)
  }

  getTicket() {
    return this.saveTicket;
  }
}
