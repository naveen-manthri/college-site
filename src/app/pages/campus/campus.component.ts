import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

  mobile = AppConstants.Mobile;
  
  constructor(private title: Title) {
    this.title.setTitle('Campus Life')
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
