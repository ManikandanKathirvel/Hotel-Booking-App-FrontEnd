import { Component } from '@angular/core';
import { CustomerServiceService } from '../../Service/customer-service.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent {
  currentpage:any=1;
  total:any;
  booking:any;
  constructor(private customerService:CustomerServiceService,
    private message:NzMessageService
  ) {
    this.getBookings();
  }
  getBookings(){
    this.customerService.getMyBooking(this.currentpage-1).subscribe(res=>{
      this.booking=res.reservationDto;
      this.total=res.totalPages*5
        console.log(res);
    },error=>{
      this.message.error("unable to get the deatils",{nzDuration:5000})
     }) 
  }
  pageIndexChange(value:any){
    this.currentpage=value;
    this.getBookings();
  }
}
