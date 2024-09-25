import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/auth/Service/Storage/user-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  baseUrl="http://localhost:8080/api";
  constructor(private http:HttpClient) {}
  
  getRoom(pageNumber:number):Observable<any>{
    return this.http.get(this.baseUrl+`/customer/getroom/${pageNumber}`,
      {
        headers:this.createAuthorizationHeader(),
      });
  }

  bookRoom(bookingDto:any){
    return this.http.post<any>(this.baseUrl+`/customer/booking`,bookingDto,
      {
        headers:this.createAuthorizationHeader(),
      });
  }

  createAuthorizationHeader() {
    let authHeader: HttpHeaders = new HttpHeaders();
    return authHeader.set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    );
  }
  getMyBooking(pageNumber:number):Observable<any>{
    const userId=UserStorageService.getId();
    return this.http.get(this.baseUrl+`/customer/bookings/${userId}/${pageNumber}`,
      {
        headers:this.createAuthorizationHeader(),
      });
  }
}
