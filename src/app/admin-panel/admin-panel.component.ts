import { AdminPanelServiceService } from './../services/admin-panel-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  empInfo: any = [];
  deleteEmpInfo: any = '';
  searchText: any;
  constructor(private AdminPanelServiceService: AdminPanelServiceService) {}

  ngOnInit(): void {
    this.showEmpDetail();
  }
  showEmpDetail() {
    this.AdminPanelServiceService.empDetail().subscribe((data) => {
      this.empInfo = data;
      console.log(this.empInfo);
      // console.log(typeof this.empInfo[0].id);
    });
  }
  empData(data: any) {
    this.deleteEmpInfo = data;
    console.log(this.deleteEmpInfo.name);
  }
  deleteEmpDetail() {
    this.AdminPanelServiceService.deleteEmpDetail(
      this.deleteEmpInfo.id
    ).subscribe((data) => {
      console.log(data);
      this.showEmpDetail();
    });
  }
}