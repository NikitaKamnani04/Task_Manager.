import { UserServicesService } from './../services/user-services.service';
import { Component, OnInit } from '@angular/core';
// import { Chart, registerables } from 'node_modules/chart.js';
// Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private UserServicesService: UserServicesService) {}
  chartdata: any;
  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];
  

  ngOnInit(): void {
    this.getChartData();
  }
  getChartData() {
    this.UserServicesService.getChartInfo().subscribe((res) => {
      this.chartdata = res;
      if (this.chartdata != null) {
        for (let i = 0; i < this.chartdata.length; i++) {
          console.log(this.chartdata[i]);
          this.labeldata.push(this.chartdata[i].year);
          this.realdata.push(this.chartdata[i].amount);
          this.colordata.push(this.chartdata[i].colorcode);
        }
        console.log(this.labeldata);
        console.log(this.realdata);
        console.log(this.colordata);

        // this.RenderChart(this.labeldata, this.realdata, this.colordata,'line', 'linechart');
        // this.RenderChart(this.labeldata, this.realdata, this.colordata,'doughnut', 'doughnut');
      }
    });
  }
  // RenderChart(labeldata: any, maindata: any, colordata: any, type:any, id: any) {
    // const myChart:any = document.getElementById('myChart');
      // id.canvas.parentNode.style.height = '528px';
    // id.canvas.parentNode.style.width = '528px';
    // new Chart(id, {
    //   type: type,
    //   data: {
    //     labels: labeldata,
    //     datasets: [
    //       {
    //         label: '# of Votes',
    //         data: maindata,
    //         backgroundColor: colordata,
    //         borderColor: ['rgba(154,165,235,1)'],
    //         borderWidth: 3,
    //       },
    //     ],
    //   },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   }
}
