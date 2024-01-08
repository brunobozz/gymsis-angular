import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BackendService } from 'src/app/services/backend/backend.service';

@Component({
  selector: 'exercises-modal-create',
  templateUrl: './exercises-modal-create.component.html',
})
export class ExercisesModalCreateComponent {
  visible: boolean = false;
  public form: FormGroup;
  @Output() refreshList = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private backend: BackendService,
    private toastr: ToastrService
  ) {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      type: [null, Validators.required],
    });
  }

  showDialog() {
    this.visible = true;
  }

  public submitForm() {
    if (this.form.valid) {
      this.postForm();
    }
  }

  public postForm() {
    this.backend
      .postData('exercises', this.form.value)
      .subscribe((res: any) => {
        this.toastr.success('O exercício foi criado', 'Feito!');
        this.resetModal();
      });
  }

  public resetModal() {
    this.form.reset();
    this.visible = false;
    this.refreshList.emit();
  }
}
