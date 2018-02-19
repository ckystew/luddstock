import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityCounterComponent } from './capacity-counter.component';

describe('CapacityCounterComponent', () => {
  let component: CapacityCounterComponent;
  let fixture: ComponentFixture<CapacityCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacityCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
