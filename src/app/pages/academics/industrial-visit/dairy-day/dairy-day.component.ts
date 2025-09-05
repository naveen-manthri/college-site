import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dairy-day',
  templateUrl: './dairy-day.component.html',
  styleUrls: ['./dairy-day.component.css']
})
export class DairyDayComponent implements OnInit {

  constructor() { }

  images = [
    { url: 'assets/industrial-visits/dairy-day-1.jpeg', alt: 'Dairy Day 1'},
    { url: 'assets/industrial-visits/dairy-day-2.jpeg', alt: 'Dairy Day 2' },
    { url: 'assets/industrial-visits/dairy-day-3.jpeg', alt: 'Dairy Day 3' },
    { url: 'assets/industrial-visits/dairy-day-4.jpeg', alt: 'Dairy Day 4' },
  ]

  ngOnInit(): void {
  }

}
