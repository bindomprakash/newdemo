import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezComponent } from './freez.component';

describe('FreezComponent', () => {
  let component: FreezComponent;
  let fixture: ComponentFixture<FreezComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreezComponent]
    });
    fixture = TestBed.createComponent(FreezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
