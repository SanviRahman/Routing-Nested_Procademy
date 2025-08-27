import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouserDetailsComponent } from './couser-details.component';

describe('CouserDetailsComponent', () => {
  let component: CouserDetailsComponent;
  let fixture: ComponentFixture<CouserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouserDetailsComponent]
    });
    fixture = TestBed.createComponent(CouserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
