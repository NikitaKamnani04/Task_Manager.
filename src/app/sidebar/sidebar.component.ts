import { Component, OnInit } from '@angular/core';
declare var $: any;
var document: Document;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toggle: boolean = false;
  // ngAfterViewInit() {
  //   const body: any = document.querySelector('body'),
  //     sidebar: any = document.querySelector('.sidebar'),
  //     toggle: any = document.querySelector('.toggle'),
  //     searchBtn: any = document.querySelector('.search-bar');
  //   if (toggle) {
  //     toggle.addEventListener('click', () => {
  //       sidebar.classList.toggle('close');
  //     });
  //   } else {
  //     searchBtn.addEventListener('click', () => {
  //       sidebar.classList.remove('close');
  //     });
  //   }
  // }

}
