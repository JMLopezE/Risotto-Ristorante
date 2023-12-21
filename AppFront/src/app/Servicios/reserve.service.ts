import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
        providedIn: 'root'
      })
      export class ReservesService {
      
        constructor(private http:HttpClient) { }
      
        apiUrl = "http://localhost:9000/pets"
        tokenName = "jwt"
      
        headers:HttpHeaders = new HttpHeaders({
          "Content-Type":"application/json"
        })
      
        getPetsList(): Observable<any> {
          const token:string = localStorage.getItem(this.tokenName) as string
          const headers = new HttpHeaders({
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
          });
      
          return this.http.get<any>(this.apiUrl, {headers})
        }
      }