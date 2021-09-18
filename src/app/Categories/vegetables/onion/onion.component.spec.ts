import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnionComponent } from './onion.component';

describe('OnionComponent', () => {
  let component: OnionComponent;
  let fixture: ComponentFixture<OnionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
