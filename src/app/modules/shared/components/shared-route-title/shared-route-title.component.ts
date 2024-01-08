import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-route-title',
  templateUrl: './shared-route-title.component.html',
})
export class SharedRouteTitleComponent {
  @Input() icon: string = '';
  @Input() text: string = '';
}
