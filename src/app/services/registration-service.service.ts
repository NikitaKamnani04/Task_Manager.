import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  data: any;
  constructor(private httpclient: HttpClient) {

  }

  fetchData() {
    return this.httpclient.get('http://localhost:3000/employees')
  }
  getEmployeeData(data: any ) {
    return this.httpclient.post("http://localhost:3000/employees/", data)
  }

}



