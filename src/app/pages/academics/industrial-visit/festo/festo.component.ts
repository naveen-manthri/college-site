import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-festo',
  templateUrl: './festo.component.html',
  styleUrls: ['./festo.component.css']
})
export class FestoComponent implements OnInit {

  constructor() { }

  images = [
    { url: 'assets/industrial-visits/festo-1.jpeg', alt: 'Festo 1'},
    { url: 'assets/industrial-visits/festo-2.jpeg', alt: 'Festo 2' },
  ]

  ngOnInit(): void {
  }

}
