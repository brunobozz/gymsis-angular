import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BackendService } from 'src/app/services/backend/backend.service';

@Component({
  selector: 'exercises-list',
  templateUrl: './exercises-list.component.html',
})
export class ExercisesListComponent {
  public exercises: any[] = [];

  constructor(private backend: BackendService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this, this.getExercises();
  }

  public getExercises() {
    this.backend.getData('exercise').subscribe((res: any) => {
      console.log(res);
      this.exercises = res;
    });
  }

  public deleteExercise(id: any) {
    this.backend.deleteData('exercise/', id).subscribe(() => {
      this.toastr.success('O exercício foi apagado', 'Feito!');
      this.getExercises();
    });
  }
}
