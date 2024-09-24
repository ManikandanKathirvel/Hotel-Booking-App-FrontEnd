
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostRoomComponent } from './components/post-room/post-room.component';
import { DemoNgZarroAntdModule } from 'src/app/DemoNgZarroAntdModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateRoomComponent } from './components/update-room/update-room.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NgModule } from '@angular/core';
import { ReservationComponent } from './components/reservation/reservation.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostRoomComponent,
    UpdateRoomComponent,
    ReservationComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoNgZarroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NzPaginationModule
  ]
})
export class AdminModule { }
