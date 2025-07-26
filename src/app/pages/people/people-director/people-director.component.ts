import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-people-director',
  templateUrl: './people-director.component.html',
  styleUrls: ['./people-director.component.css']
})
export class PeopleDirectorComponent implements OnInit {

  mobile = AppConstants.Mobile;
  
  constructor(private title: Title) {
    this.title.setTitle('People')
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
