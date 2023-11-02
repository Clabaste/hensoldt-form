import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TicketComponent} from "./ticket.component";
import {TicketFormComponent} from "./ticket-form/ticket-form.component";
import {TicketOverviewComponent} from "./ticket-overview/ticket-overview.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {
    path: '',

    component: TicketComponent,

    children: [

      {
        path: 'new_ticket',
        component: TicketFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'ticket_overview',
        component: TicketOverviewComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
