import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationServiceService {
  constructor(private httpclient: HttpClient) {}

  fetchData() {
    return this.httpclient.get('http://localhost:4000/showEmpDetails');
  }
  getEmployeeData(data: any) {
    return this.httpclient.post('http://localhost:4000/registerUserApi', data);
  }
}
