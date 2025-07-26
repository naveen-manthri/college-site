import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';
import { PeopleComponent } from './pages/people/people.component';
import { AcademicsComponent } from './pages/academics/academics.component';
import { CampusComponent } from './pages/campus/campus.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: 'people', loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule) },
  { path: 'academics', loadChildren: () => import('./pages/academics/academics.module').then(m => m.AcademicsModule) },
  { path: 'campus', loadChildren: () => import('./pages/campus/campus.module').then(m => m.CampusModule) },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
]


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule, NoopAnimationsModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
