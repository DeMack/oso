/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OsoTreeBranchComponent } from '../classes/oso-tree-branch.component';

describe('OsoTreeNodeComponent', () => {
  let component: OsoTreeBranchComponent;
  let fixture: ComponentFixture<OsoTreeBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsoTreeBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsoTreeBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
