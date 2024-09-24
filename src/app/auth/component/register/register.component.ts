import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { valueFunctionProp } from 'ng-zorro-antd/core/util';
import { AuthService } from '../../Service/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!:FormGroup;
  constructor(private fb:FormBuilder, private authService: AuthService,
    private message:NzMessageService,
    private router:Router
  ){}
  ngOnInit(){
    this.registerForm=this.fb.group({
      email:['', [Validators.email,Validators.required]],
      password:['',[Validators.required]],
      username:['',[Validators.required]],
    })
  }
submitForm(){
  this.authService.register(this.registerForm.value).subscribe(res=>{
    if(res.id){
      this.message.success("SignUp Successful",{nzDuration:5000});
      this.router.navigate(["/"]);
      this.registerForm.reset(); 
    }
    else{
      this.message.error(`${res.message}`,{nzDuration:5000});
    }
  })
}

}
