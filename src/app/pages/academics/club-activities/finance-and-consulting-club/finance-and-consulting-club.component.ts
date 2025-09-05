import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-and-consulting-club',
  templateUrl: './finance-and-consulting-club.component.html',
  styleUrls: ['./finance-and-consulting-club.component.css']
})
export class FinanceAndConsultingClubComponent implements OnInit {

  constructor() { }

  images = [
    { url: 'assets/club-activities/finance-and-consulting-club-1.jpeg', alt: 'Club Activity 1'},
    { url: 'assets/club-activities/finance-and-consulting-club-2.jpeg', alt: 'Club Activity 2' },
    { url: 'assets/club-activities/finance-and-consulting-club-3.jpeg', alt: 'Club Activity 3'},
    { url: 'assets/club-activities/finance-and-consulting-club-4.jpeg', alt: 'Club Activity 4' },
    { url: 'assets/club-activities/finance-and-consulting-club-5.jpeg', alt: 'Club Activity 5' },
    { url: 'assets/club-activities/finance-and-consulting-club-6.jpeg', alt: 'Club Activity 6' },
    { url: 'assets/club-activities/finance-and-consulting-club-7.jpeg', alt: 'Club Activity 7' },
    { url: 'assets/club-activities/finance-and-consulting-club-8.jpeg', alt: 'Club Activity 8' },
  ]

  ngOnInit(): void {
  }

}
