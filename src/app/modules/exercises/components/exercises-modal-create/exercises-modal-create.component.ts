import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BackendService } from 'src/app/services/backend/backend.service';

@Component({
  selector: 'exercises-modal-create',
  templateUrl: './exercises-modal-create.component.html',
})
export class ExercisesModalCreateComponent implements OnInit {
  @Output() refreshList = new EventEmitter<void>();
  visible: boolean = false;
  public form: FormGroup;
  public categories: any;
  public selectedCategories: number[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private backend: BackendService,
    private toastr: ToastrService
  ) {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      categoryIds: [[], Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.backend.getData('category').subscribe((res: any) => {
      this.categories = res;
    });
  }

  public setCategories(id: number) {
    if (this.selectedCategories.includes(id)) {
      const index = this.selectedCategories.indexOf(id);
      if (index !== -1) {
        this.selectedCategories.splice(index, 1);
        this.form.patchValue({
          categoryIds: this.selectedCategories,
        });
      }
    } else {
      this.selectedCategories.push(id);
      this.form.patchValue({
        categoryIds: this.selectedCategories,
      });
    }
  }

  showDialog() {
    this.visible = true;
  }

  public submitForm() {
    if (this.form.valid) {
      this.postForm();
    } else {
      this.toastr.error('Preencha o formulário corretamente', 'ERRO');
    }
  }

  public postForm() {
    console.log(this.form.value);
    this.backend.postData('exercise', this.form.value).subscribe((res: any) => {
      this.toastr.success(
        'O exercício ' + this.form.value.name + ' foi criado',
        'Feito!'
      );
      this.resetModal();
    });
  }

  public resetModal() {
    this.form.reset();
    this.selectedCategories = [];
    this.visible = false;
    this.refreshList.emit();
  }
}
