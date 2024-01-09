import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRouteTitleComponent } from './components/shared-route-title/shared-route-title.component';
import { CategoryIconComponent } from './components/category-icon/category-icon.component';
import { CategoryChipComponent } from './components/category-chip/category-chip.component';

const sharedComponents = [
  SharedRouteTitleComponent,
  CategoryIconComponent,
  CategoryChipComponent,
];
@NgModule({
  declarations: [sharedComponents],
  imports: [CommonModule],
  exports: [sharedComponents],
})
export class SharedModule {}
