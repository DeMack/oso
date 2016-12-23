/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OsoTableComponent } from './oso-table.component';

describe('OsoTableComponent', () => {
  let component: OsoTableComponent;
  let fixture: ComponentFixture<OsoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
