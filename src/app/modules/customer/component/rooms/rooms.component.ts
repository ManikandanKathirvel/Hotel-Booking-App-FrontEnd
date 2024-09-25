import { Component } from '@angular/core';
import { CustomerServiceService } from '../../Service/customer-service.service';
import { NzMessageComponent, NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormBuilder } from '@angular/forms';
import { UserStorageService } from 'src/app/auth/Service/Storage/user-storage.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  rooms=[];
  currentPage=1;
  total:any;
  loading:boolean=false;

  isVisibleMiddle=false;
  date:Date[]=[];
  checkInDate:Date;
  checkOutDate:Date;
  id:number;

  constructor(private customerService:CustomerServiceService,
    private message:NzMessageService,
    private modelService:NzModalService,
    private fb:FormBuilder  ){
      this.getRooms();
    }
    getRooms(){
     // this.loading=true;
      return this.customerService.getRoom(this.currentPage-1).subscribe(res=>{
        this.rooms=res.roomDtoList;
        //console.log(res.roomDtoList)
        this.total=res.totalPages*1;
      })
    }
    pageIndexChange(value:any){
      //console.log(value);
      this.currentPage=value;
      this.getRooms();
    }
    ngOnInit(){
      this.getRooms();
      console.log(this.getRooms())
    }
    onChange(event:Date[]):void{
      if(event.length===2){
        this.checkInDate=event[0];
        this.checkOutDate=event[1];
      }
    }
    handleCancelMiddle(){
      this.isVisibleMiddle=false;
    }

    handleOkMiddle(){
      if (!this.id || !this.checkInDate || !this.checkOutDate) {
        this.message.error("Please fill in all required details", { nzDuration: 5000 });
        return;
      }

      const obj={
        userId:UserStorageService.getId(),
        roomId:this.id,
        checkInDate:this.checkInDate,
        checkOutDate:this.checkOutDate
      }
      //console.log(obj.roomId+" :"+obj.checkIn+" : "+obj.userId+" :"+obj.checkOut);
     //console.log("error:   :"+this.customerService.bookRoom(obj))
     console.log("Booking Details:", obj);
      this.customerService.bookRoom(obj).subscribe(res=>{
        console.log(res+"::::::")
        this.message.success('Request Submited Successfully',
          {nzDuration:5000});
          this.isVisibleMiddle=false;
      },
    err=>{
      console.error("Booking Failed:", err);
      this.message.error("Booking Failed",{nzDuration:5000})
    })
  }
  showModelMiddle(id:number){
    this.id=id;
    this.isVisibleMiddle=true;
  }
}
