import { Component } from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../AdminService/admin.service';

@Component({
  selector: 'app-post-room',
  templateUrl: './post-room.component.html',
  styleUrls: ['./post-room.component.css']
})
export class PostRoomComponent {
  roomDeatilsForm:FormGroup;
  constructor(private fb:FormBuilder,
    private message:NzMessageService,
    private router:Router,
    private adminService:AdminService
  ) {
    this.roomDeatilsForm=this.fb.group({
      name:['',Validators.required],
      type:['',Validators.required],
      price:['',Validators.required]
    })
  }
  submitForm(){
    this.adminService.postRoomDeatils(this.roomDeatilsForm.value).subscribe(res=>{

        this.message.success(
          `Room Added Successfully`,{nzDuration:5000});
          this.roomDeatilsForm.reset();
          this.router.navigateByUrl('/admin/dashboard')
    },
    error=>{this.message.error(
      `$(error.error)`,
      {nzDuration:5000}
    )

    }
  )
  }
  cancelForm() {
    // Logic to cancel (reset the form)
    this.router.navigateByUrl('/admin/dashboard')
  }

}
