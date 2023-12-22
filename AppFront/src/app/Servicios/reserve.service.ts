import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservesService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:9000';

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  register(Reserve:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"/api/createreserve", Reserve,{ headers: this.headers })
  }

  reserveList(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
}
