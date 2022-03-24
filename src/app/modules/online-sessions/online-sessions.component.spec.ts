import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineSessionsComponent } from './online-sessions.component';

describe('OnlineSessionsComponent', () => {
  let component: OnlineSessionsComponent;
  let fixture: ComponentFixture<OnlineSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
