import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//MODULES
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//COMPONENTS
import { ExercisesComponent } from './exercises.component';
import { ExercisesActionsComponent } from './components/exercises-actions/exercises-actions.component';
import { ExercisesListComponent } from './components/exercises-list/exercises-list.component';
import { ExercisesModalCreateComponent } from './components/exercises-modal-create/exercises-modal-create.component';

//PRIMENG
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';

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
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    TableModule,
    MultiSelectModule,
    InputTextModule 
  ],
})
export class ExercisesModule {}
