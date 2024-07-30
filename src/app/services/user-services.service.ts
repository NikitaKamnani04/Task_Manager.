import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  constructor(private HttpClient: HttpClient) {}

  getChartInfo() {
    return this.HttpClient.get('http://localhost:3000/tasks');
  }
  // working
  loginData(data: any) {
    //Fetching the data from server using post method
    return this.HttpClient.post(' http://localhost:4000/userLogin', data);
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
}
