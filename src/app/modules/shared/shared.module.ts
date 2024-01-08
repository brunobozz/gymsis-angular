import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRouteTitleComponent } from './components/shared-route-title/shared-route-title.component';
import { CategoryIconComponent } from './components/category-icon/category-icon.component';

const sharedComponents = [SharedRouteTitleComponent, CategoryIconComponent];
@NgModule({
  declarations: [sharedComponents],
  imports: [CommonModule],
  exports: [sharedComponents],
})
export class SharedModule {}
