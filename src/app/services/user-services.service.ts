import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

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


}
