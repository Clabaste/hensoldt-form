import { NgModule } from '@angular/core';
import { TicketComponent } from './ticket.component';
import {CommonModule} from "@angular/common";
import {TicketRoutingModule} from "./ticket-routing.module";
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { TicketOverviewComponent } from './ticket-overview/ticket-overview.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TicketComponent,
    TicketFormComponent,
    TicketOverviewComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    TicketComponent
  ],
  providers: [

  ]
})
export class TicketModule { }
