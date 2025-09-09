import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-activities',
  templateUrl: './club-activities.component.html',
  styleUrls: ['./club-activities.component.css']
})
export class ClubActivitiesComponent implements OnInit {

  constructor() { }

  images = [
    { url: 'assets/club-activities/Adventure.jpeg', alt: 'Club Activity 1' , link: '/academics/club-activities/'},
    { url: 'assets/club-activities/Competitive.jpeg', alt: 'Club Activity 2', link: '/academics/club-activities/competitive-club' },
    { url: 'assets/club-activities/Finance.png', alt: 'Club Activity 3', link: '/academics/club-activities/finance-and-consulting-club' },
    { url: 'assets/club-activities/GSB.png', alt: 'Club Activity 4' , link: '/academics/club-activities/'},
    { url: 'assets/club-activities/HR.jpeg', alt: 'Club Activity 5' , link: '/academics/club-activities/'},
    { url: 'assets/club-activities/Spiritual.jpeg', alt: 'Club Activity 6', link: '/academics/club-activities/spiritual-club' },
  ]

  ngOnInit(): void {
  }

}
