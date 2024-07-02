import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from './product/product.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, ProductComponent, MenuBarComponent, NavBarComponent]
})
export class AppComponent {
  title = 'newApp';
}
