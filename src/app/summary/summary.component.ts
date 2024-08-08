import { Component } from '@angular/core';
import { BeerService } from '../beer.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  sessions: any[] = [];

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.loadSessions();
  }

  loadSessions(): void {
    this.sessions = this.beerService.getAllSessions();
  }
}
