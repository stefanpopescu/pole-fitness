import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBottomMenuComponent } from './side-bottom-menu.component';

describe('SideBottomMenuComponent', () => {
  let component: SideBottomMenuComponent;
  let fixture: ComponentFixture<SideBottomMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBottomMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBottomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
