import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFooterMenuComponent } from './app-footer-menu.component';

describe('AppFooterMenuComponent', () => {
  let component: AppFooterMenuComponent;
  let fixture: ComponentFixture<AppFooterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFooterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFooterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
