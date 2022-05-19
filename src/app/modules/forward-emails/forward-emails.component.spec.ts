import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardEmailsComponent } from './forward-emails.component';

describe('ForwardEmailsComponent', () => {
  let component: ForwardEmailsComponent;
  let fixture: ComponentFixture<ForwardEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardEmailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
