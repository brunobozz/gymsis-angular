import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrls: ['./category-icon.component.scss'],
})
export class CategoryIconComponent {
  @Input() category: any;
  @Input() size: string = '32px';
  @Input() border: string = '4px solid #fff';
  @Input() shadow: string = '0 0 5px rgba(0,0,0,0.2)';
}
