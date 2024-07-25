import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/models.model';

@Injectable({
  providedIn: 'root',
})
export class AdminPanelServiceService {
  constructor(private http: HttpClient) {}

  empDetail() {
    return this.http.get<any>('http://localhost:4000/showEmpDetails');
  }
  deleteEmpDetail(id: number) {
    return this.http.post('http://localhost:4000/deleteUserApi', { id: id });
  }
}
