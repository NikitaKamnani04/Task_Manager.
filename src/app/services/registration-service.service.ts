import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationServiceService {
  constructor(private httpclient: HttpClient) {}
// working
  // fetchData() {
  //   return this.httpclient.get('http://localhost:4000/showEmpDetails');
  // } 

  // working
  getEmployeeData(data: any) {
    return this.httpclient.post('http://localhost:4000/registerUserApi/', data);
  }
}
