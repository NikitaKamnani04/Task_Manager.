import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  
  constructor(private HttpClient: HttpClient) {

  }

  getChartInfo() {
    return this.HttpClient.get('http://localhost:3000/tasks');
  }

  loginData(data: any) {
    //Fetching the data from server using post method
    return this.HttpClient.post(' http://localhost:4000/userLogin', data);
  }



  // projectData(data:any){        //using fake api
  //   return this.HttpClient.post('http://localhost:3000/empDetails',data);
  // }

  projectData(data:any)
  {
    return this.HttpClient.post(environment.apiurl +'/createProject',data)
  }

  // deptData(data: any)
  // {
  //   return this.HttpClient.get('https://work-management-ashen.vercel.app/api/deptList',data)
  // }

  deptData(data:any){
    return this.HttpClient.get(environment.apiurl +'/deptList',data)
  }

  orgRegister(data:any){
    return this.HttpClient.post('http://localhost:3000/empDetails',data);
  }

}
