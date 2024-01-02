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

  login(admin: Admin):Observable<Token>{
    return this.http.post<Token>(this.apiUrl+"/admin/login", JSON.stringify(admin),{ headers: this.headers })
  }

  register(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.apiUrl+"/admin/register", admin,{ headers: this.headers })
  }

  isLogged():boolean{
    return localStorage.getItem(this.tokenName) ? true : false;
  }

  saveToken(token:Token){
    localStorage.setItem(this.tokenName, token.token)
  }

  // getReserveList():Observable<Admin[]>{
  //   let headers = this.headers;
  //   const token:string = localStorage.getItem(this.tokenName) as string
  //   headers = headers.append("Authorization", "Bearer" + token)

  //   return this.http.get<Admin[]>(this.apiUrl, { headers })
  // }

}
