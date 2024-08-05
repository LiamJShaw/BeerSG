import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NavbarComponent,
    BeerListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BeerSG';
}
