import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AboutMathComponent } from './about-math/about-math.component';
import { AboutFounderPresidentComponent } from './about-founder-president/about-founder-president.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      { path: '', component: AboutMathComponent },
      { path: 'founder-president', component: AboutFounderPresidentComponent }
    ]
  }
];

@NgModule({
  declarations: [AboutComponent, AboutMathComponent, AboutFounderPresidentComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AboutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutModule { }
