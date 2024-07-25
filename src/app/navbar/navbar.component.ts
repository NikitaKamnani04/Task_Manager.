import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  visibleSidebar3: any;
  toggleNote: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  toggelNoteSection() {
    this.toggleNote = !this.toggleNote;
  }
  showAddNotes() {
    this.toggleNote = !this.toggleNote;
  }
}
