import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  menuItems: MenuItem[];

  ngOnInit(): void {
    this.menuItems = [{
        label: 'Finiši Protokoll',
        routerLink: ['/']
      },
      {
        label: 'Lisa aeg',
        routerLink: ['/add-time']
      },
      {
        label: 'Lisa sportlane',
        routerLink: ['/add-athlete']
      }];
  }
}
