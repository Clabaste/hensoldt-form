import { Injectable } from '@angular/core';
import {catchError, map, Subscription, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Person} from "./user.model";
export interface Options {
  name: number,
  desription: string
}

interface OptionsRespValue {
  "ID": number,
  "Name": string,
  "Description": string,
  "ReleaseDate": string,
  "DiscontinuedDate": Date | null,
  "Rating": number,
  "Price": number
}

interface OptionsResp {
  'odata.metadata': string,
  value: OptionsRespValue[]
}
@Injectable({
  providedIn: 'root'
})
export class TicketFormService {
  options: Options[] | null = null
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

  getTestURL() {
    const body = {
      ID:4,
      Name: 'Test'
    }
    return this.http.post<any>(
      'https://services.odata.org/V3/(S(5dqozceuzhrgcto0km0g5wei))/OData/OData.svc/Categories',
      body
    ).pipe(

      tap((resp) => {
        console.info(resp)
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
