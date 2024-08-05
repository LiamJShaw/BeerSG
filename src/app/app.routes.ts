import { Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { SummaryComponent } from './summary/summary.component';
import { BeerManagementComponent } from './beer-management/beer-management.component';

export const routes: Routes = [
    { path: '', component: BeerListComponent },
    { path: 'beers', component: BeerManagementComponent },
    { path: 'summary', component: SummaryComponent },
];