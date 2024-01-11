import { Component, EventEmitter, Output } from '@angular/core';
import { BackendService } from 'src/app/services/backend/backend.service';

@Component({
  selector: 'exercises-actions',
  templateUrl: './exercises-actions.component.html',
})
export class ExercisesActionsComponent {
  @Output() callDialog = new EventEmitter<void>();

  constructor(private backend: BackendService) {}

  public showDialog() {
    this.callDialog.emit();
  }
}
