import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMIComponent } from './carousel-mi.component';

describe('CarouselMIComponent', () => {
  let component: CarouselMIComponent;
  let fixture: ComponentFixture<CarouselMIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselMIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
