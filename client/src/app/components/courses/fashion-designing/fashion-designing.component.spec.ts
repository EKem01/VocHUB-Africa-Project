import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionDesigningComponent } from './fashion-designing.component';

describe('FashionDesigningComponent', () => {
  let component: FashionDesigningComponent;
  let fixture: ComponentFixture<FashionDesigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionDesigningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionDesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
