import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ksdl',
  templateUrl: './ksdl.component.html',
  styleUrls: ['./ksdl.component.css']
})
export class KsdlComponent implements OnInit {

  constructor() { }

  images = [
    { url: 'assets/industrial-visits/ksdl-1.jpg', alt: 'KSDL 1'},
    { url: 'assets/industrial-visits/ksdl-2.jpg', alt: 'KSDL 2' },
    { url: 'assets/industrial-visits/ksdl-3.jpeg', alt: 'KSDL 3'},
  ]

  ngOnInit(): void {
  }

}
