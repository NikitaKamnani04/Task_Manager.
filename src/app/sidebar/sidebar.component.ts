import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const body:any = document.querySelector('body'),
      sidebar:any = document.querySelector('.sidebar'),
      toggle:any = document.querySelector('.toggle'),
      modeSwitch:any = document.querySelector('.toggle-switch'),
      modeText:any = document.querySelector('.mode-text'),
      searchBtn:any = document.querySelector('.search-bar');

    modeSwitch.addEventListener('click', () => {
      body.classList.toggle('dark');
      //   document.querySelector(".mode-text").innertext=""

      if (body.classList.contains('dark')) {
        modeText.innerText = ' Light Mode ';
      } else modeText.innerText = ' Dark Mode ';
    });

    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('close');
    });

    searchBtn.addEventListener('click', () => {
      sidebar.classList.remove('close');
    });
  }
}
