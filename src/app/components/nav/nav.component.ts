import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public day: string;

  constructor() { }

  ngOnInit(): void {
    this.day = 'today';
  }

}