import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const body: any = document.querySelector('body'),
      sidebar: any = document.querySelector('.sidebar'),
      toggle: any = document.querySelector('.toggle'),
      searchBtn: any = document.querySelector('.search-bar');

    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('close');
      
    });

    searchBtn.addEventListener('click', () => {
      sidebar.classList.remove('close');
    });
  }
}
