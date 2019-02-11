import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StonComponent } from './ston.component';

describe('StonComponent', () => {
  let component: StonComponent;
  let fixture: ComponentFixture<StonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
