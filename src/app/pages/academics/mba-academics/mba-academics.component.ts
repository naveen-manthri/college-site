import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-mba-academics',
  templateUrl: './mba-academics.component.html',
  styleUrls: ['./mba-academics.component.css']
})
export class MbaAcademicsComponent implements OnInit {

    mobile = AppConstants.Mobile;
  
  constructor() { }

  ngOnInit() {
  }

}
