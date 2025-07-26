import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampusComponent } from './campus.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  { path: '', component: CampusComponent }
];

@NgModule({
  imports: [
    CommonModule, ComponentsModule, RouterModule.forChild(routes)
  ],
  declarations: [CampusComponent]
})
export class CampusModule { }
