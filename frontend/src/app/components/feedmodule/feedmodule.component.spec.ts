import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedmoduleComponent } from './feedmodule.component';

describe('FeedmoduleComponent', () => {
  let component: FeedmoduleComponent;
  let fixture: ComponentFixture<FeedmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
