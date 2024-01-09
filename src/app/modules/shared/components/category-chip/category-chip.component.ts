import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-category-chip',
  templateUrl: './category-chip.component.html',
  styleUrls: ['./category-chip.component.scss'],
})
export class CategoryChipComponent {
  @Input() category: any;
  @Input() size: string = '32px';
  @Input() borderStyle: string = '4px solid #fff';
  @Input() shadow: string = '0 0 5px rgba(0,0,0,0.2)';
}
