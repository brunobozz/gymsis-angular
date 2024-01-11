import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject, debounceTime } from 'rxjs';
import { BackendService } from 'src/app/services/backend/backend.service';

@Component({
  selector: 'exercises-list',
  templateUrl: './exercises-list.component.html',
})
export class ExercisesListComponent implements OnInit {
  public exercises: any[] = [];
  public categories: any;
  searchTerm$ = new Subject<string>();
  private searchTerm: string = '';
  private catIds: number[] = [];
  private searchCategories: string = '';

  constructor(private backend: BackendService, private toastr: ToastrService) {
    this.searchTerm$.pipe(debounceTime(300)).subscribe((searchTerm) => {
      this.searchTerm = searchTerm;
      this.getExercises();
    });
  }

  ngOnInit(): void {
    this.getExercises();
    this.getCategories();
  }

  public getCategories() {
    this.backend.getData('category').subscribe((res: any) => {
      this.categories = res;
    });
  }

  public getExercises() {
    this.backend
      .getData(
        `exercise?catIds=${this.searchCategories}&searchTerm=${this.searchTerm}`
      )
      .subscribe((res: any) => {
        this.exercises = res;
      });
  }

  public deleteExercise(id: any) {
    this.backend.deleteData('exercise/', id).subscribe(() => {
      this.toastr.success('O exercício foi apagado', 'Feito!');
      this.getExercises();
    });
  }

  public filterByCategories(idToRemove: number) {
    if (this.catIds.includes(idToRemove)) {
      let index = this.catIds.findIndex((id: number) => id === idToRemove);
      this.catIds.splice(index, 1);
    } else {
      this.catIds.push(idToRemove);
    }
    this.searchCategories = this.catIds.join(',');
    this.getExercises();
  }

  public filterByTerm(term: string): void {
    this.searchTerm$.next(term);
  }
}
