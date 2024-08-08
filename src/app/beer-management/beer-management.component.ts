import { Component } from '@angular/core';
import { BeerService } from '../beer.service';
import { Beer } from '../interfaces/beer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-beer-management',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './beer-management.component.html',
  styleUrl: './beer-management.component.css'
})
export class BeerManagementComponent {
  beerName = '';
  beers: string[] = [];

  constructor(private beerService: BeerService) {
    this.loadBeers();
  }

  addBeer(): void {
    if (this.beerName.trim()) {
      this.beerService.addBeer(this.beerName.trim());
      this.loadBeers();
      this.beerName = '';
    }
  }

  removeBeer(name: string): void {
    this.beerService.removeBeer(name);
    this.loadBeers();
  }

  loadBeers(): void {
    this.beers = this.beerService.getBeerNames();
  }
}
