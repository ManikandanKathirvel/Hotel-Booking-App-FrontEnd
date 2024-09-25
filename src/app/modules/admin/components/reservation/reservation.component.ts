import { Component } from '@angular/core';
import { AdminService } from '../../AdminService/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  currentPage:any=1;
  total:any;
  reservation:any;
  constructor(private adminService:AdminService,
    private message:NzMessageService
  ) {
    this.getReservation();
  }

  getReservation(){
    this.adminService.getReservation(this.currentPage-1).subscribe(res=>{
      this.reservation=res.reservationDto;
      this.total=res.totalPages*5;
    })
  }
  pageIndexChange(value:any){
    this.currentPage=value;
    this.getReservation();
  }
  changeReservationStatus(bookingId:number,status:string){
    this.adminService.changeReservationStatus(bookingId,status).subscribe(()=>{
      this.message.success('Reservation upadted Successfully',{nzDuration: 5000});
      this.getReservation();
    }),()=>{
      this.message.error('somthing went worng')
    }
    
  }

}
