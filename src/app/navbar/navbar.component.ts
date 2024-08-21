import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  visibleSidebar3: any;
  toggleNote: boolean = false;
  toggleMenuIcon: boolean = true;
  public items: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    $(document).mouseup((e: any) => {
      var container = $('.dd-menu');
      container.hide();
      $('.showMenuList').click(() => {
        container.toggle();
      });
    });

    this.items = [
      { label: 'Dashboard' },
      { label: 'Project' },
      { label: 'Task' },
      { label: 'Employees' },
    ];
  }

  toggelNoteSection() {
    this.toggleNote = !this.toggleNote;
  }
  showAddNotes() {
    this.toggleNote = !this.toggleNote;
  }
  hideMenu() {
    this.toggleMenuIcon = !this.toggleMenuIcon;
  }
}
