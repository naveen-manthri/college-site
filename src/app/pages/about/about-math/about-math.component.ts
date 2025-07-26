import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
import { AppointmentModalComponent } from 'src/app/components/appointment-modal/appointment-modal.component';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-about-math',
  templateUrl: './about-math.component.html',
  styleUrls: ['./about-math.component.css']
})
export class AboutMathComponent implements OnInit {

  mobile = AppConstants.Mobile;
  
  constructor(private title: Title, private dialog: MatDialog) {
    this.title.setTitle('About')
  }

  ngOnInit(): void {
  }

  async onBookAnAppointmentBtnClick(){
    const result = await firstValueFrom(
      this.dialog.open(AppointmentModalComponent).afterClosed()
    );
  }

}
