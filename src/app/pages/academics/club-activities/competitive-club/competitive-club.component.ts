import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitive-club',
  templateUrl: './competitive-club.component.html',
  styleUrls: ['./competitive-club.component.css']
})
export class CompetitiveClubComponent implements OnInit {

  constructor() { }

  images = [
    { url: 'assets/club-activities/competitive-1.jpg', alt: 'Club Activity 1'},
    { url: 'assets/club-activities/competitive-2.jpg', alt: 'Club Activity 2' },
    { url: 'assets/club-activities/competitive-3.jpg', alt: 'Club Activity 3'},
    { url: 'assets/club-activities/competitive-4.jpg', alt: 'Club Activity 4' },
  ]

  ngOnInit(): void {
  }

}
