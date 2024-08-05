import { UserServicesService } from './../services/user-services.service';
import { Component, OnInit } from '@angular/core';
// import { Chart, registerables } from 'node_modules/chart.js';
// Chart.register(...registerables);
import { Chart, registerables } from 'node_modules/chart.js';
import { ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';
import { Location } from '@angular/common';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  name = 'Angular 5';
  statusList: Array<any> = [];
  priorityList: Array<any> = [];
  searchText: any;
  taskData: any;
  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];
  loginUserDetail: any;
  loginUserDepartment: any;
  router: any;
  constructor(
    private UserServicesService: UserServicesService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.loginUserDetail = this.location.getState();

    // to get the department of the login User
    // this.UserServicesService.departments().subscribe((res: any) => {
    //   res.data.forEach((element: any, index: any, array: any) => {
    //     if (element.id == this.loginUserDetail.data.deptId) {
    //       this.loginUserDepartment = element.deptName;
    //       // console.log(this.loginUserDepartment);
    //     }
    //   });
    // });

    this.statusList = [
      { status: 'in progress', name: 'In Progress' },
      { status: 'not started', name: 'Not Started' },
      { status: 'on hold', name: 'On Hold' },
      { status: 'canceled', name: 'Canceled' },
      { status: 'completed', name: 'Completed' },
      { status: 'overdue', name: 'Overdue' },
      { status: 'sent for review', name: 'Sent for review ' },
    ];
    this.priorityList = [
      { priority: 'high', name: 'High' },
      { priority: 'medium', name: 'Medium' },
      { priority: 'low', name: 'Low' },
    ];
  }

  ngOnInit(): void {
    // console.log(this.loginUserDetail.data.id);

    this.getChartData();
    $(() => {
      $('.dropdown > .caption').on('click', () => {
        $(this).parent().toggleClass('open');
      });

      $('.dropdown > .list > .item').on('click', () => {
        $('.dropdown > .list > .item').removeClass('selected');
        $(this)
          .addClass('selected')
          .parent()
          .parent()
          .removeClass('open')
          .children('.caption')
          .text($(this).text());
      });

      $(document).on('keyup', function (evt: { keyCode: any; which: any }) {
        if ((evt.keyCode || evt.which) === 27) {
          $('.dropdown').removeClass('open');
        }
      });

      $(document).on('click', function (evt: { target: any }) {
        if ($(evt.target).closest('.dropdown > .caption').length === 0) {
          $('.dropdown').removeClass('open');
        }
      });
    });
  }
  getChartData() {
    this.UserServicesService.getChartInfo().subscribe((res) => {
      this.taskData = res;
      if (this.taskData != null) {
        for (let i = 0; i < this.taskData.length; i++) {
          this.labeldata.push(this.taskData[i].day);
          this.realdata.push(this.taskData[i].hours);
          this.colordata.push(this.taskData[i].colorcode);
        }

        this.RenderChart(
          this.labeldata,
          this.realdata,
          '#9381FF',
          'line',
          'linechart',
          true
        );
        this.RenderChart(
          this.labeldata,
          this.realdata,
          this.colordata,
          'doughnut',
          'doughnut',
          false
        );
      }
    });
  }
  RenderChart(
    labeldata: any,
    maindata: any,
    colordata: any,
    type: any,
    id: any,
    drawOnChartArea: any
  ) {
    const myChart: any = document.getElementById('myChart');

    new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'No. of hours',
            data: maindata,
            backgroundColor: colordata,
            borderColor: ['rgba(154,165,235,1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              drawOnChartArea: false,
            },
          },
          x: {
            grid: {
              drawOnChartArea: drawOnChartArea,
            },
          },
        },
      },
    });
  }
}
