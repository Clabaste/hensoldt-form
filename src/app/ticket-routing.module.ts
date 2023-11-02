import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TicketComponent} from "./ticket/ticket.component";
import {TicketFormComponent} from "./ticket/ticket-form/ticket-form.component";
import {TicketOverviewComponent} from "./ticket/ticket-overview/ticket-overview.component";
import {AuthGuard} from "./ticket/auth.guard";



const routes: Routes = [
  {
    path: '',
    component: TicketComponent,
  },
  {
    path: 'new_ticket',
    component: TicketFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ticket_overview',
    component: TicketOverviewComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }

/*
*
* path: '',
  component: TicketComponent,
  canActivate: [AuthGuard],
  {
    path: '',
    component: TicketComponent
  },
  {
    path: 'new_ticket',
    component: TicketFormComponent
  },
  {
    path: 'ticket_overview',
    component: TicketOverviewComponent
  }*/
