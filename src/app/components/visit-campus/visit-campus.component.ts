import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AppointmentModalComponent } from '../appointment-modal/appointment-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-visit-campus',
  templateUrl: './visit-campus.component.html',
  styleUrls: ['./visit-campus.component.css']
})
export class VisitCampusComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  async onBookAnAppointmentBtnClick(){
      const result = await firstValueFrom(
        this.dialog.open(AppointmentModalComponent).afterClosed()
      );
    }

}
