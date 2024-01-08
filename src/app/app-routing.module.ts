import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//COMPONENTS
import { HomeComponent } from './modules/home/home.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ExercisesComponent } from './modules/exercises/exercises.component';
import { WorkoutsComponent } from './modules/workouts/workouts.component';
import { ConfigurationsComponent } from './modules/configurations/configurations.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'exercises',
    component: ExercisesComponent,
  },
  {
    path: 'workouts',
    component: WorkoutsComponent,
  },
  {
    path: 'configuracoes',
    component: ConfigurationsComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
