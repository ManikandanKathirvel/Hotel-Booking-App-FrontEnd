import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostRoomComponent } from './components/post-room/post-room.component';
import { UpdateRoomComponent } from './components/update-room/update-room.component';
import { ReservationComponent } from './components/reservation/reservation.component';

const routes: Routes = [{ path: '', component: AdminComponent },
  {path:'dashboard', component:DashboardComponent},
  {path:'room',component:PostRoomComponent},
  {path:'room/:id/edit',component:UpdateRoomComponent},
  {path:'reservations',component:ReservationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
