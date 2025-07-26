import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicsComponent } from './academics.component';
import { ComponentsModule } from "src/app/components/components.module";
import { RouterModule, Routes } from '@angular/router';
import { MbaAcademicsComponent } from './mba-academics/mba-academics.component';
import { ProgramAcademicsComponent } from './program-academics/program-academics.component';

const routes: Routes = [
  {
    path: '',
    component: AcademicsComponent, // optional parent container
    children: [
      { path: '', component:MbaAcademicsComponent },
      { path: 'explore-program', component: ProgramAcademicsComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
],
  declarations: [AcademicsComponent, MbaAcademicsComponent, ProgramAcademicsComponent]
})
export class AcademicsModule { }
