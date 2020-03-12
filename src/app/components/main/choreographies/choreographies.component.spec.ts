import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreographiesComponent } from './choreographies.component';

describe('ChoreographiesComponent', () => {
  let component: ChoreographiesComponent;
  let fixture: ComponentFixture<ChoreographiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoreographiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoreographiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
