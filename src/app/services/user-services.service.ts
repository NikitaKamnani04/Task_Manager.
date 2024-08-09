import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  constructor(private HttpClient: HttpClient) { }

  getChartInfo() {
    return this.HttpClient.get('http://localhost:3000/tasks');
  }




  // Integrated by Nikita
  projectData(data: any) {
    return this.HttpClient.post(environment.API + '/createProject', data)
  }

  // deptData(){
  //   return this.HttpClient.get(environment.apiurl +'/deptList')
  // }

  // Integrated by Nikita, client list api
  clientData() {
    return this.HttpClient.get(environment.API + '/clientList')
  }

  // Integrated by Nikita
  clientAddData(data: any) {
    return this.HttpClient.post(environment.API + '/addClient', data)
  }


  //project Members api, Integrated by Nikita
  membersData() {
    return this.HttpClient.get(environment.API + '/showEmpDetails')
  }

  // Integrated by Nikita
  orgRegister(data: any) {
    return this.HttpClient.post(environment.API + '/orgApi', data);
  }
  // working
  loginData(data: any) {
    //Fetching the data from server using post method
    return this.HttpClient.post(environment.API + '/userLogin', data);
  }


  resetPassword(data: any) {
    return this.HttpClient.post(environment.API + '/forgotPassword', data);
  }
  updateEmpDetails(data: any) {
    console.log(data);
    return this.HttpClient.post(environment.API + 'updateUserApi/', data);

  }

  departments() {
    return this.HttpClient.get(environment.API + '/deptList');
  }
}
