import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'exercises-actions',
  templateUrl: './exercises-actions.component.html',
})
export class ExercisesActionsComponent {
  @Output() callDialog = new EventEmitter<void>();

  public showDialog() {
    this.callDialog.emit();
  }
}
