import {Component, OnDestroy, OnInit} from '@angular/core';
import {TicketFormService} from "../ticket-form.service";
import {Ticket} from "../ticket.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.scss']
})
export class TicketOverviewComponent implements OnInit, OnDestroy{

  ticketOverView: Ticket[] = []

  getOverviewSubscription: Subscription
  constructor(
    private ticketFormService: TicketFormService
  ) {
    this.getOverviewSubscription = Subscription.EMPTY
  }
  ngOnInit() {
    this.getOverviewSubscription = this.ticketFormService.getTicketsOverview().subscribe((resp) => {
      this.ticketOverView = resp
    })
  }
  ngOnDestroy() {
    this.getOverviewSubscription.unsubscribe()
  }
}
