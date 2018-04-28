import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultEventComponent } from './result-event.component';

describe('ResultEventComponent', () => {
  let component: ResultEventComponent;
  let fixture: ComponentFixture<ResultEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
