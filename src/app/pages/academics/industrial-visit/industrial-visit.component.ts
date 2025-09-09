import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industrial-visit',
  templateUrl: './industrial-visit.component.html',
  styleUrls: ['./industrial-visit.component.css']
})
export class IndustrialVisitComponent implements OnInit {

  constructor() { }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  industries = [
    { url: 'assets/industrial-visits/diary-day.jpeg', alt: 'Industry 1', link: '/academics/industrial-visit/dairy-day', linkText: 'DAIRY DAY' },
    { url: 'assets/industrial-visits/akshayakalpa.jpeg', alt: 'Industry 2', link: '/academics/industrial-visit/akshayakalpa', linkText: 'AKSHAYAKALPA' },
    { url: 'assets/industrial-visits/eagles-unbound.JPG', alt: 'Industry 3', link: '/academics/industrial-visit/eagles-unbound', linkText: 'EAGLES UNBOUND' },
    { url: 'assets/industrial-visits/ksdl.jpeg', alt: 'Industry 4', link: '/academics/industrial-visit/ksdl', linkText: 'KSDL' },
    { url: 'assets/industrial-visits/festo.jpeg', alt: 'Industry 5', link: '/academics/industrial-visit/festo', linkText: 'FESTO' },
  ]

  ngOnInit(): void {
  }

}
