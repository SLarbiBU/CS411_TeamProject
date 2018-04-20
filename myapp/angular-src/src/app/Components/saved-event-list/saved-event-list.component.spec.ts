import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedEventListComponent } from './saved-event-list.component';

describe('SavedEventListComponent', () => {
  let component: SavedEventListComponent;
  let fixture: ComponentFixture<SavedEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
