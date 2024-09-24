import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  baseUrl='http://localhost:8080/api';

  register(signupRequest:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.post<any>(this.baseUrl+"/signUp",signupRequest,{headers});
    console.log(this.baseUrl);
  }
  login(loginRequest:any):Observable <any>{
    return this.http.post(this.baseUrl+"/login",loginRequest);
  }
  
}
