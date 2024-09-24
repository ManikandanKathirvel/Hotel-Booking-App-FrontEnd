import { Component } from '@angular/core';
import { UserStorageService } from './auth/Service/Storage/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelBookingApp';

  isCustomerLoggedIn:boolean=UserStorageService.isCustomerLoggedIn();
  isAdminLoggedIn:boolean=UserStorageService.isAdminLoggedIn();
  constructor(private router:Router){}
  ngOnInit(){
    this.router.events.subscribe(e=>{
      if(e.constructor.name==="NavigationEnd") {
        this.isCustomerLoggedIn=UserStorageService.isCustomerLoggedIn();
        this.isAdminLoggedIn=UserStorageService.isAdminLoggedIn();
      }
    })

  }
  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('/');
  }
}
