import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetToClassComponent } from './get-to-class.component';

describe('GetToClassComponent', () => {
  let component: GetToClassComponent;
  let fixture: ComponentFixture<GetToClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetToClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetToClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
