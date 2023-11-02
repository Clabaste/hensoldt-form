import { Injectable } from '@angular/core';
import {catchError, map, Subscription, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {OptionsRespValue, Options, OptionsResp, Ticket} from "./ticket.model";



@Injectable({
  providedIn: 'root'
})
export class TicketFormService {
  options: Options[] | null = null

  ticketOverview: Ticket[] = []
  constructor(
    private http: HttpClient
  ) { }

  getProductOptions() {
    return this.http.get<OptionsResp>(
      'https://services.odata.org/V3/(S(srikglsrettylwcvgnognbgl))/OData/OData.svc/Products'
    ).pipe(
      catchError(this.handleErrorResponse),
      map((resp) => {
        return resp.value.map((item: OptionsRespValue) => {
          return {
            name: item.ID,
            desription: item.Name
          }
        })
      })
    )

  }
  getTicketsOverview() {
    return this.http.get<Ticket[]>(
      'ticketOverview'
    ).pipe(
      catchError(this.handleErrorResponse),
      tap((resp) => {
        return resp
      })
    )

  }
  postNewTicket(formData: Ticket) {
    return this.http.post<Ticket[]>(
      'newTicket',
      formData
    ).pipe(
      catchError(this.handleErrorResponse),
      map((resp) => {
        return resp
        /*return resp.value.map((item: OptionsRespValue) => {
          return {
            name: item.ID,
            desription: item.Name
          }
        })*/
      })
    )

  }

  handleErrorResponse(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    return throwError(() => new Error(errorMessage))
  }
  private handleSetOptions(resp: any) {
    this.options = resp.value.map((item: OptionsRespValue) => {
      return {
        name: item.ID,
        desription: item.Name
      }
    })

  }
}
