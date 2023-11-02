import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {Person} from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = new BehaviorSubject<Person | null>(null)

  constructor(
    private http: HttpClient
  ) { }
  public setUser(userId: string) {
    const url = `https://services.odata.org/V3/(S(srikglsrettylwcvgnognbgl))/OData/OData.svc/PersonDetails(${userId})`


    return this.http.get<any>(
      url
    ).pipe(
      catchError(this.handleErrorResponse),
      tap((resp) => {
        this.handleAuthentication(
          resp
        )
      })
    )
  }
  handleErrorResponse(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    return throwError(() => new Error(errorMessage))
  }
  private handleAuthentication(resp: any) {
    this.user.next(resp)
  }
}
/*
public Request<T>(requestType: RequestTypes, urlOptions: IUrlOptions, body?: any, options?: any) : Observable<T> {
  let response: any


else if (options) {
  response = this.http[RequestTypes[requestType]](
    this.constructUrl(urlOptions),
    options);
}


console.info(typeof response)
// return response.map((res) => <T>res.json());
return response
}*/
