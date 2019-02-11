import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WACTYOComponent } from './wactyo.component';

describe('WACTYOComponent', () => {
  let component: WACTYOComponent;
  let fixture: ComponentFixture<WACTYOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WACTYOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WACTYOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
