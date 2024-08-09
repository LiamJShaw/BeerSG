import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private beerNamesKey = 'BeerNames';
  private currentSessionKey = 'CurrentSession';
  private sessionsKey = 'Sessions';

  constructor() { }

  // Beer Management
  getBeerNames(): string[] {
    return JSON.parse(localStorage.getItem(this.beerNamesKey) || '[]');
  }

  addBeer(name: string): void {
    const beers = this.getBeerNames();
    if (!beers.includes(name)) {
      beers.push(name);
      localStorage.setItem(this.beerNamesKey, JSON.stringify(beers));

      // Update the current session with the new beer
      const currentSession = this.getSession();
      currentSession.push({ name, count: 0 });
      this.updateSession(currentSession);
    }
  }

  removeBeer(name: string): void {
    let beers = this.getBeerNames();
    beers = beers.filter(beer => beer !== name);
    localStorage.setItem(this.beerNamesKey, JSON.stringify(beers));
  }

  // Session Management
  startNewSession(): void {
    const beers = this.getBeerNames().map(name => ({ name, count: 0 }));
    localStorage.setItem(this.currentSessionKey, JSON.stringify(beers));
  }

  getSession(): any[] {
    return JSON.parse(localStorage.getItem(this.currentSessionKey) || '[]');
  }

  updateSession(beers: any[]): void {
    localStorage.setItem(this.currentSessionKey, JSON.stringify(beers));
  }

  endSession(): void {
    const session = this.getSession();
    const timestamp = new Date().toISOString();
    const sessions = this.getAllSessions();

    const nonZeroBeers = session.filter(beer => beer.count > 0);

    if (nonZeroBeers.length == 0) return;
    
    sessions.push({ timestamp, beers: nonZeroBeers });
    localStorage.setItem(this.sessionsKey, JSON.stringify(sessions));

    // Clear current session
    localStorage.removeItem(this.currentSessionKey);
  }

  // Stats Management
  getAllSessions(): any[] {
    return JSON.parse(localStorage.getItem(this.sessionsKey) || '[]');
  }
}