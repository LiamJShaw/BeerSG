import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerManagementComponent } from './beer-management.component';

describe('BeerManagementComponent', () => {
  let component: BeerManagementComponent;
  let fixture: ComponentFixture<BeerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
