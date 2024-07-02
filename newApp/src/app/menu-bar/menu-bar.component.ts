import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent implements OnInit {
    items: any[] = [];

    ngOnInit(): void {
        this.items = [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: '/'
          },
          {
            label: 'Product',
            icon: 'pi pi-box',
            routerLink: 'product'
          },
          {
            label: 'Proposals',
            icon: 'pi pi-envelope',
            routerLink: 'proposals',
          }
        ];
    }
}
