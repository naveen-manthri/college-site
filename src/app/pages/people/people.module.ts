import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { AdministrativeStaffComponent } from './administrative-staff/administrative-staff.component';
import { PeopleDirectorComponent } from './people-director/people-director.component';
import { PeopleFacultyComponent } from './people-faculty/people-faculty.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent, // optional parent container
    children: [
      { path: '', component:PeopleDirectorComponent },
      { path: 'faculty', component: PeopleFacultyComponent},
      { path: 'administrative-staff', component: AdministrativeStaffComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,ComponentsModule, RouterModule.forChild(routes)
  ],
  declarations: [PeopleComponent,AdministrativeStaffComponent,PeopleDirectorComponent, PeopleFacultyComponent]
})
export class PeopleModule { }
