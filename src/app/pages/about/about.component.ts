import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private title: Title, private dialog: MatDialog) {
    this.title.setTitle('About')
  }

  ngOnInit(): void {
  }
}
