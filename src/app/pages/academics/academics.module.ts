import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicsComponent } from './academics.component';
import { ComponentsModule } from "src/app/components/components.module";
import { RouterModule, Routes } from '@angular/router';
import { MbaAcademicsComponent } from './mba-academics/mba-academics.component';
import { ProgramAcademicsComponent } from './program-academics/program-academics.component';
import { IndustrialVisitComponent } from './industrial-visit/industrial-visit.component';
import { ClubActivitiesComponent } from './club-activities/club-activities.component';
import { FinanceAndConsultingClubComponent } from './club-activities/finance-and-consulting-club/finance-and-consulting-club.component';
import { CompetitiveClubComponent } from './club-activities/competitive-club/competitive-club.component';
import { SpiritualClubComponent } from './club-activities/spiritual-club/spiritual-club.component';
import { FestoComponent } from './industrial-visit/festo/festo.component';
import { DairyDayComponent } from './industrial-visit/dairy-day/dairy-day.component';
import { AkshayakalpaComponent } from './industrial-visit/akshayakalpa/akshayakalpa.component';
import { EaglesUnboundComponent } from './industrial-visit/eagles-unbound/eagles-unbound.component';
import { KsdlComponent } from './industrial-visit/ksdl/ksdl.component';
import { CorporateLectureSeriesComponent } from './corporate-lecture-series/corporate-lecture-series.component';

const routes: Routes = [
  {
    path: '',
    component: AcademicsComponent, // optional parent container
    children: [
      { path: '', component:MbaAcademicsComponent },
      { path: 'explore-program', component: ProgramAcademicsComponent},
      { 
        path: 'club-activities', 
        children: [
          { path: '', component: ClubActivitiesComponent},
          { path: 'competitive-club', component: CompetitiveClubComponent},
          { path: 'finance-and-consulting-club', component: FinanceAndConsultingClubComponent},
          { path: 'spiritual-club', component: SpiritualClubComponent},
        ]
      },
      { 
        path: 'industrial-visit', 
        children: [
          { path: '', component: IndustrialVisitComponent},
          { path: 'akshayakalpa', component: AkshayakalpaComponent},
          { path: 'dairy-day', component: DairyDayComponent},
          { path: 'eagles-unbound', component: EaglesUnboundComponent},
          { path: 'festo', component: FestoComponent},
          { path: 'ksdl', component: KsdlComponent},
        ]
      },
      {
        path: 'corporate-lecture-series',
        component: CorporateLectureSeriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
],
  declarations: [AcademicsComponent, MbaAcademicsComponent, ProgramAcademicsComponent, IndustrialVisitComponent, ClubActivitiesComponent, FinanceAndConsultingClubComponent, CompetitiveClubComponent, SpiritualClubComponent, FestoComponent, DairyDayComponent, AkshayakalpaComponent, EaglesUnboundComponent, KsdlComponent, CorporateLectureSeriesComponent]
})
export class AcademicsModule { }
