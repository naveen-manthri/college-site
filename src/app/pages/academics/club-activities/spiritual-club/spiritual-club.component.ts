import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spiritual-club',
  templateUrl: './spiritual-club.component.html',
  styleUrls: ['./spiritual-club.component.css']
})
export class SpiritualClubComponent implements OnInit {

  constructor() { }

  images = [
    { url: 'assets/club-activities/spiritual-hub-1.jpeg', alt: 'Club Activity 1'},
    { url: 'assets/club-activities/spiritual-hub-2.jpeg', alt: 'Club Activity 2' },
    { url: 'assets/club-activities/spiritual-hub-3.jpeg', alt: 'Club Activity 3'},
    { url: 'assets/club-activities/spiritual-hub-4.jpeg', alt: 'Club Activity 4' },
    { url: 'assets/club-activities/spiritual-hub-5.jpeg', alt: 'Club Activity 5' },
  ]

  ngOnInit(): void {
  }

}
