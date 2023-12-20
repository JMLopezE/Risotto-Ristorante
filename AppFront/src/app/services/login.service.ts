import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Admin {
  "id": string,
  "username": string,
  "email": string,
  "firstName": string,
  "lastName": string,
  "token": string
}

export interface Reserve {
  "email": string,
  "name":  string,
  "last_name": string,
  "phone": number,
  "number_people": number,
  "special_occasions": string,
  "date_reserve":number,
  "hour_reserve":number,
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private
    http:HttpClient) { }

login(Adminname:string,
  password:string) :Observable<Admin> {
    const header = new HttpHeaders ({"content-Type": "aplication/json"})
  }
}

return this.http.post<Admin>("https://")

export class Reserve {

  constructor() {}
}
