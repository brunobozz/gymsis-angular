import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BackendService } from 'src/app/services/backend/backend.service';

@Component({
  selector: 'exercises-actions',
  templateUrl: './exercises-actions.component.html',
})
export class ExercisesActionsComponent implements OnInit {
  @Output() callDialog = new EventEmitter<void>();
  public categories: any;

  constructor(private backend: BackendService) {}

  ngOnInit(): void {
    this, this.getCategories();
  }

  public getCategories() {
    this.backend.getData('category').subscribe((res: any) => {
      this.categories = res;
    });
  }

  public showDialog() {
    this.callDialog.emit();
  }
}
