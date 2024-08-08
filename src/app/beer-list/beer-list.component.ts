import { Component, OnInit } from '@angular/core';
import { Beer } from '../interfaces/beer';
import { FormsModule } from '@angular/forms';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.css'
})
export class BeerListComponent {

  session: any[] = [];

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.loadSession();
  }

  loadSession(): void {
    const session = this.beerService.getSession();

    if (session.length === 0) {
      this.beerService.startNewSession();
      this.session = this.beerService.getSession();
    } else {
      this.session = session;
    }
  }

  incrementBeer(beer: any): void {
    beer.count++;
    this.beerService.updateSession(this.session);
  }

  decrementBeer(beer: any): void {
    if (beer.count > 0) {
      beer.count--;
      this.beerService.updateSession(this.session);
    }
  }

  endSession(): void {
    if (window.confirm('Are you sure you want to end the session?')) {
      this.beerService.endSession();
      this.loadSession();
    }
  }
}
