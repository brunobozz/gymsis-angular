import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  @Output() closeEmit = new EventEmitter<any>();
  public opened = false;

  public menu = [
    {
      label: 'Home',
      icon: 'fa-home',
      link: '/',
    },
    {
      label: 'Treinos',
      icon: 'fa-list',
      link: '/workouts',
    },
    {
      label: 'Exercícios',
      icon: 'fa-cube',
      link: '/exercises',
    },
    {
      label: 'Configurations',
      icon: 'fa-gear',
      link: '/configurations',
    },
  ];

  public toggleMenu() {
    if (this.opened === false) {
      this.opened = true;
    } else {
      this.opened = false;
      this.closeEmit.emit();
    }
  }
}
