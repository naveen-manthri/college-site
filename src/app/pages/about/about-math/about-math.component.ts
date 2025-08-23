import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-about-math',
  templateUrl: './about-math.component.html',
  styleUrls: ['./about-math.component.css']
})
export class AboutMathComponent implements OnInit {

  mobile = AppConstants.Mobile;
  
  constructor(private title: Title) {
    this.title.setTitle('About')
  }

  ngOnInit(): void {
  }
}
