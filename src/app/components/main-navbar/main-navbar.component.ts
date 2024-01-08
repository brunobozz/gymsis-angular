import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss'],
})
export class MainNavbarComponent {
  public opened = false;
  @Output() toggleEmit = new EventEmitter<any>();

  public toggleMenu() {
    if (this.opened === false) {
      this.toggleEmit.emit();
      this.opened = true;
    } else {
      this.toggleEmit.emit();
      this.opened = false;
    }
  }

  public closeMenu() {
    this.opened = false;
  }
}
