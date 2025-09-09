import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eagles-unbound',
  templateUrl: './eagles-unbound.component.html',
  styleUrls: ['./eagles-unbound.component.css']
})
export class EaglesUnboundComponent implements OnInit {

  constructor() { }

  images = [
    { url: 'assets/industrial-visits/eagles-unbound-1.JPG', alt: 'Eagles Unbound 1'},
    { url: 'assets/industrial-visits/eagles-unbound-2.JPG', alt: 'Eagles Unbound 2' },
    { url: 'assets/industrial-visits/eagles-unbound-3.JPG', alt: 'Eagles Unbound 3'},
    { url: 'assets/industrial-visits/eagles-unbound-4.JPG', alt: 'Eagles Unbound 4'},
    { url: 'assets/industrial-visits/eagles-unbound-5.JPG', alt: 'Eagles Unbound 5'},
    { url: 'assets/industrial-visits/eagles-unbound-6.JPG', alt: 'Eagles Unbound 6'},
    { url: 'assets/industrial-visits/eagles-unbound-7.JPG', alt: 'Eagles Unbound 7'},
    { url: 'assets/industrial-visits/eagles-unbound-8.JPG', alt: 'Eagles Unbound 8'},
    { url: 'assets/industrial-visits/eagles-unbound-9.JPG', alt: 'Eagles Unbound 9'},
    { url: 'assets/industrial-visits/eagles-unbound-10.JPG', alt: 'Eagles Unbound 10'},
    { url: 'assets/industrial-visits/eagles-unbound-11.JPG', alt: 'Eagles Unbound 11'},
    { url: 'assets/industrial-visits/eagles-unbound-12.JPG', alt: 'Eagles Unbound 12'},
  ]

  ngOnInit(): void {
  }

}
