import { Component, OnInit } from '@angular/core';
import { Beer } from '../interfaces/beer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.css'
})
export class BeerListComponent implements OnInit {
  beers: Beer[] = [];
  newBeerName: string = '';

  ngOnInit(): void {
    this.loadBeers();
  }

  addBeer(): void {
    if (this.newBeerName.trim()) {
      this.beers.push({ name: this.newBeerName, count: 0 });
      this.newBeerName = '';
      this.saveBeers();
    }
  }

  incrementBeer(beer: Beer): void {
    beer.count++;
    this.saveBeers();
  }

  decrementBeer(beer: Beer): void {
    if (beer.count > 0) {
      beer.count--;
      this.saveBeers();
    }
  }

  endDay(): void {
    this.saveDaySummary();
    this.beers.forEach(beer => beer.count = 0);
    this.saveBeers();
  }

  saveBeers(): void {
    localStorage.setItem('beers', JSON.stringify(this.beers));
  }

  loadBeers(): void {
    const storedBeers = localStorage.getItem('beers');
    if (storedBeers) {
      this.beers = JSON.parse(storedBeers);
    }
  }

  saveDaySummary(): void {
    const daySummary = {
      date: new Date().toLocaleDateString(),
      beers: this.beers.map(beer => ({ ...beer }))
    };
    const summaries = this.loadSummaries();
    summaries.push(daySummary);
    localStorage.setItem('summaries', JSON.stringify(summaries));
  }

  loadSummaries(): any[] {
    const storedSummaries = localStorage.getItem('summaries');
    return storedSummaries ? JSON.parse(storedSummaries) : [];
  }
}
