import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-akshayakalpa',
  templateUrl: './akshayakalpa.component.html',
  styleUrls: ['./akshayakalpa.component.css']
})
export class AkshayakalpaComponent implements OnInit {

  constructor() { }

  images = [
    { url: 'assets/industrial-visits/akshayakalpa-1.jpeg', alt: 'Akshayakalpa 1'},
    { url: 'assets/industrial-visits/akshayakalpa-2.jpeg', alt: 'Akshayakalpa 2' },
    { url: 'assets/industrial-visits/akshayakalpa-3.jpeg', alt: 'Akshayakalpa 3'},
    { url: 'assets/industrial-visits/akshayakalpa-4.jpeg', alt: 'Akshayakalpa 4'},
  ]

  ngOnInit(): void {
  }

}
