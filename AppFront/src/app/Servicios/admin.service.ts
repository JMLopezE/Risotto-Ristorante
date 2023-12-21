import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin, Token } from '../models/admin.models';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrl = "http://localhost:9000"
  tokenName = "jwt"

  constructor(private http:HttpClient) { }

  headers:HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

  login(user: Admin):Observable<Token>{
    return this.http.post<Token>(this.apiUrl+"/api/admin", JSON.stringify(user),{ headers: this.headers })
  }

  register(user:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"/api/createUsers", user,{ headers: this.headers })
  }

  isLogged():boolean{
    return localStorage.getItem(this.tokenName) ? true : false;
  }

  saveToken(token:Token){
    localStorage.setItem(this.tokenName, token.token)
  }

}
