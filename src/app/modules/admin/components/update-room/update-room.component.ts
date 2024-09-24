import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../AdminService/admin.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent {
  updateRoomForm:FormGroup;
  id=this.activateRoute.snapshot.params["id"];
  constructor(private fb:FormBuilder,
    private message:NzMessageService,
    private router:Router,
    private adminService:AdminService,
    private activateRoute:ActivatedRoute
  ) {
    this.updateRoomForm=this.fb.group({
      name:['',Validators.required],
      type:['',Validators.required],
      price:['',Validators.required]
    });
    this.getRoomById();
  }
 
  getRoomById(){
    this.adminService.getRoomById(this.id).subscribe(res=>{
        this.updateRoomForm.patchValue(res);
    },err=>{
      this.message.error("Id Not Found");
    })
  }
  submitForm(){
    this.adminService.updateRoom(this.id,this.updateRoomForm.value).subscribe(res=>{
      this.message.success("Room Updated",{nzDuration:5000});
      this.router.navigateByUrl("/admin/dashboard");
    },err=>{
      this.message.error("Error at updation",{nzDuration:5000});
    })
}


}
