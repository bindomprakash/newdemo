import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelivisionComponent } from './telivision.component';

describe('TelivisionComponent', () => {
  let component: TelivisionComponent;
  let fixture: ComponentFixture<TelivisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelivisionComponent]
    });
    fixture = TestBed.createComponent(TelivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
