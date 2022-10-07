import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  @ViewChild(MenuComponent) menu: MenuComponent;

  constructor() {}

  uptMenu(): void {
    // this.menu.testLogged();
  }
}
