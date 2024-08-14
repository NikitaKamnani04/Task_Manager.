import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/models.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminPanelServiceService {
  constructor(private http: HttpClient) {}
  // working
  empDetail() {
    return this.http.get<any>(environment.API + '/showEmpDetails');
  }

  // working
  deleteEmpDetail(id: number) {
    return this.http.post(environment.API + '/deleteUserApi', { id: id });
  }
}
