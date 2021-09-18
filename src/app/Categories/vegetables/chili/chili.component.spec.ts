import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiliComponent } from './chili.component';

describe('ChiliComponent', () => {
  let component: ChiliComponent;
  let fixture: ComponentFixture<ChiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
