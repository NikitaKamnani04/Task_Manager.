import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  constructor(private HttpClient: HttpClient) {}

  getChartInfo() {
    return this.HttpClient.get('http://localhost:3000/tasks');
  }
}
