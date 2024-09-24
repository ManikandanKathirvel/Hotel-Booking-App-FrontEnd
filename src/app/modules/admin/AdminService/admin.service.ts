import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/auth/Service/Storage/user-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  postRoomDeatils(roomDto: any): Observable<any> {
    return this.http.post(this.baseUrl + '/admin/rooms', roomDto, {
      headers: this.createAuthorizationHeader(),
    });
  }
  createAuthorizationHeader() {
    let authHeader: HttpHeaders = new HttpHeaders();
    return authHeader.set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    );
  }
  getRooms(pageNumber: number): Observable<any> {
    return this.http.get(this.baseUrl + `/admin/rooms/${pageNumber}`, {
      headers: this.createAuthorizationHeader(),
    });
  }
  getRoomById(id: any) {
    return this.http.get(this.baseUrl + `/admin/room/${id}`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  updateRoom(id: number, roomDto: any):Observable<any> {
    return this.http.put(this.baseUrl + `/admin/updateRoom/${id}`, roomDto,
      {
        headers: this.createAuthorizationHeader(),
      }); 
  }

  deleteRoomById(id:number){
    return this.http.delete(this.baseUrl+`/admin/deleteRoom/${id}`,
      { headers: this.createAuthorizationHeader(),})
  }

  getReservation(pageNumber: number): Observable<any> {
    return this.http.get(this.baseUrl + `/admin/reservation/${pageNumber}`, {
      headers: this.createAuthorizationHeader(),
    });
  }
  changeReservationStatus(reservationId:number,status:string): Observable<any> {
    return this.http.get(this.baseUrl + `/admin/res/${reservationId}/${status}`, {
      headers: this.createAuthorizationHeader(),
    });
  }
}
