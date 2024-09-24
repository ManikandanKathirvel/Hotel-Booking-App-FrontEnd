import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { DemoNgZarroAntdModule } from 'src/app/DemoNgZarroAntdModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomsComponent } from './component/rooms/rooms.component';


@NgModule({
  declarations: [CustomerComponent, RoomsComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    DemoNgZarroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CustomerModule {}
