import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnlineSessionComponent } from './add-online-session.component';

describe('AddOnlineSessionComponent', () => {
  let component: AddOnlineSessionComponent;
  let fixture: ComponentFixture<AddOnlineSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnlineSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOnlineSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
