import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import * as $ from 'jquery'; // var document: Document;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [MessageService],
})
export class SidebarComponent implements OnInit {
  constructor(
    private Router: Router,
    private messageService: MessageService,
    public authService: UserServicesService
  ) {}
  toggle: boolean = false;

  ngOnInit(): void {}

  changetoggle() {
    if (!this.toggle) {
      $('#sidebar').addClass('close');
    } else {
      $('#sidebar').removeClass('close');
    }

    this.toggle = !this.toggle;
  }

  logout() {
    localStorage.clear();
    this.Router.navigate(['/', 'signin']);
  }
}
