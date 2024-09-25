import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { RoomsComponent } from './component/rooms/rooms.component';
import { ViewBookingsComponent } from './component/view-bookings/view-bookings.component';

const routes: Routes = [{ path: '', component: CustomerComponent },
  {path:'rooms',component:RoomsComponent},
  {path:'booking',component:ViewBookingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
