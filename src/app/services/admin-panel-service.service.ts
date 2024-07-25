import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelServiceService {

  constructor(private http: HttpClient) { }

  empDetail(){
    return this.http.get<Employee>(' http://localhost:3500/empDetails')
  }
  deleteEmpDetail(id:number){
    return this.http.delete('http://localhost:3000/empDetails/'+id)
  }
}
