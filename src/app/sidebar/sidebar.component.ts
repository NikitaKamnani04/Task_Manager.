import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; // var document: Document;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toggle: boolean = false;

  changetoggle() {
    if (!this.toggle) {
      $('#sidebar').addClass('close');
    } else {
      $('#sidebar').removeClass('close');
    }

    this.toggle = !this.toggle;
  }
}
