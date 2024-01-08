import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//MODULES
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

//COMPONENTS
import { ExercisesComponent } from './exercises.component';
import { ExercisesActionsComponent } from './components/exercises-actions/exercises-actions.component';
import { ExercisesListComponent } from './components/exercises-list/exercises-list.component';
import { ExercisesModalCreateComponent } from './components/exercises-modal-create/exercises-modal-create.component';

//PRIMENG
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    ExercisesComponent,
    ExercisesActionsComponent,
    ExercisesListComponent,
    ExercisesModalCreateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DialogModule,
    TableModule,
  ],
})
export class ExercisesModule {}
