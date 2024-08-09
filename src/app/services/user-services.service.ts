import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  constructor(private HttpClient: HttpClient) {}
  //start - by prince😊
  getChartInfo() {
    return this.HttpClient.get('http://localhost:3000/tasks');
  }


 

  // Integrated by Nikita
  projectData(data:any)
  {
    return this.HttpClient.post(environment.apiurl +'/createProject',data)
  }

  // deptData(){
  //   return this.HttpClient.get(environment.apiurl +'/deptList')
  // }

  // Integrated by Nikita, client list api
  clientData(){
    return this.HttpClient.get(environment.apiurl +'/clientList')
  }

  // Integrated by Nikita
  clientAddData(data:any){
    return this.HttpClient.post(environment.apiurl+'/addClient',data)
  }


  //project Members api, Integrated by Nikita
  membersData(){
    return this.HttpClient.get(environment.apiurl+'/showEmpDetails')
  }

  // Integrated by Nikita
  orgRegister(data:any){
    return this.HttpClient.post(environment.apiurl+'/orgApi',data);

  // working
  loginData(data: any) {
    //Fetching the data from server using post method
    return this.HttpClient.post(environment.API + '/userLogin', data);
  }

  projectData(data: any) {
    return this.HttpClient.post('http://localhost:3000/empDetails', data);
  }
  // working
  orgRegister(data: any) {
    return this.HttpClient.post('http://localhost:4000/orgApi', data);
  }

  resetPassword(data: any) {
    return this.HttpClient.post('http://localhost:4000/forgotPassword', data);
  }
  updateEmpDetails(data: any) {
    console.log(data);

    return this.HttpClient.post(environment.API + '/updateUserApi/', data);

  }
  //End - by prince😊
}
