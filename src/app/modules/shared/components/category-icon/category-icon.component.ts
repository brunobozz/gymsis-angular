import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrls: ['./category-icon.component.scss'],
})
export class CategoryIconComponent {
  @Input() category: string = '';
}
