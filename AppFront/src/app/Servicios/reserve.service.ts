import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserve } from '../models/reservamodels.js';


@Injectable({
  providedIn: 'root',
})

export class ReservesService {

  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:9000';
  tokenName = "jwt"

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  register(reserve:Reserve): Observable<Reserve> {
    return this.http.post<Reserve>(this.apiUrl+"/reserve/create", reserve,{ headers: this.headers })
  }

  // deleteReserve(reserve:Reserve): Observable<Reserve> {
  //   return this.http.delete<Reserve>(this.apiUrl+"/reserve/:reserveId", reserve,{ headers: this.headers })
  // }

  getReserveList(): Observable<Reserve[]> {
    let headers = this.headers;
    const token:string = localStorage.getItem(this.tokenName) as string
    headers = headers.append("Authorization", "Bearer" + token)
  
  return this.http.get<Reserve[]>(this.apiUrl+"/reserve",  { headers })
  }
}
