import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BioComponent } from './bio/bio.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, data: { title: 'home' } },
  { path: 'bio', component: BioComponent, data: { title: 'bio' } },
  { path: 'projects', component: ProjectsComponent, data: { title: 'projects' } },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 100] })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
