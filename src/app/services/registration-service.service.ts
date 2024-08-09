import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationServiceService {
  constructor(private httpclient: HttpClient) {}
// working
  // fetchData() {
  //   return this.httpclient.get('http://localhost:4000/showEmpDetails');
  // } 


  fetchData() {
    return this.httpclient.get(environment.apiurlReg +'/showEmpDetails');
  }

  getEmployeeData(data: any) {
    return this.httpclient.post(environment.apiurlReg +'/registerUserApi',data);
  }


  taskformData(data:any){
     return this.httpclient.post(environment.apiurl +'/createTask',data);
     
     }

 Taskprioritydata(data: any){  
   return this.httpclient.get(environment.apiurl +'/priorityList',data)
  }

  Taskcategorydata(data:any){
  return this.httpclient.get(environment.apiurl +'/tskCategoryList',data)
 }

  ProjectNamedata(data:any){
    return this.httpclient.get(environment.apiurl +'/projectList',data)
  }

  TaskMembersdata(data:any){
    return this.httpclient.get(environment.apiurl +'/showEmpDetails',data)
  }

  // TaskMemberslist(data:any){
  //   return this.httpclient.post(environment.apiurl +'/tskAssign',data)
  // }
}
