import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicsComponent } from './academics.component';
import { ComponentsModule } from "src/app/components/components.module";
import { RouterModule, Routes } from '@angular/router';
import { MbaAcademicsComponent } from './mba-academics/mba-academics.component';
import { ProgramAcademicsComponent } from './program-academics/program-academics.component';
import { IndustrialVisitComponent } from './industrial-visit/industrial-visit.component';
import { ClubActivitiesComponent } from './club-activities/club-activities.component';

const routes: Routes = [
  {
    path: '',
    component: AcademicsComponent, // optional parent container
    children: [
      { path: '', component:MbaAcademicsComponent },
      { path: 'explore-program', component: ProgramAcademicsComponent},
      { path: 'club-activities', component: ClubActivitiesComponent},
      { path: 'industrial-visit', component: IndustrialVisitComponent},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
],
  declarations: [AcademicsComponent, MbaAcademicsComponent, ProgramAcademicsComponent, IndustrialVisitComponent, ClubActivitiesComponent]
})
export class AcademicsModule { }
