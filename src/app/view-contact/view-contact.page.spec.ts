import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewContactPage } from './view-contact.page';

describe('ViewContactPage', () => {
  let component: ViewContactPage;
  let fixture: ComponentFixture<ViewContactPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
