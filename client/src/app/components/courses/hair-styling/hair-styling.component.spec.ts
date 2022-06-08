import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairStylingComponent } from './hair-styling.component';

describe('HairStylingComponent', () => {
  let component: HairStylingComponent;
  let fixture: ComponentFixture<HairStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairStylingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HairStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
