import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {TicketModule} from "./ticket/ticket.module";

const routes: Routes = [

  {
    path: '',
    redirectTo: 'ticket',
    pathMatch: 'full'

  },
  {
    path: 'ticket',
    loadChildren: () => import('./ticket/ticket.module').then((mod) => {
      return mod.TicketModule
    })
  },
  { path: '**',  redirectTo: 'ticket' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
