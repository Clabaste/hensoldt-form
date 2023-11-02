import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit{
  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.userService.setUser('1').subscribe((res) => {
      console.info('result', res)
    })



  }
}
