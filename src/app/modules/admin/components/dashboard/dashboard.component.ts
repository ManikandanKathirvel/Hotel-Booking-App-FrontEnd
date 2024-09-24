import { ChangeDetectorRef, Component } from '@angular/core';
import { AdminService } from '../../AdminService/admin.service';
import {NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  rooms= [];
  currentPage=1;
  total:any;
  loading: boolean = false;

  constructor(
    private adminService: AdminService,
    private message: NzMessageService,
    private modelService: NzModalService,
    private cdr:ChangeDetectorRef
  ) {this.getRooms();
  }

  ngOnInit() {
    this.getRooms();
  }

  getRooms() {
    this.loading = true;
    this.adminService.getRooms(this.currentPage-1).subscribe(
      (res) => {
        this.rooms = res.roomDtoList;
        this.total = res.totalPages*1;
       // this.cdr.detectChanges();
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        console.log(err);
        this.message.error('Failed to load rooms');
      }
    );
  }

  pageIndexChange(value: number) {
    console.log('Page index changed to:', value);
    this.currentPage = value;
    console.log(this.currentPage);
    this.getRooms();
  }

  deleteRoom(id: number) {
    this.adminService.deleteRoomById(id).subscribe(
      (res) => {
        this.message.success('Room Deleted!!!', { nzDuration: 5000 });
        this.getRooms();
      },
      (err) => {
        this.message.error('Room Not Found', { nzDuration: 5000 });
      }
    );
  }
  showConfirm(id: number) {
    this.modelService.confirm({
      nzTitle: 'confirm',
      nzContent: 'Are you sure you want to Delete!!',
      nzOkText: 'Delete',
      nzCancelText: 'Cancel',
      nzOnOk: () => this.deleteRoom(id),
    });
  }
}
