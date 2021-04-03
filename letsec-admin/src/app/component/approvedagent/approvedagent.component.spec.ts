import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedagentComponent } from './approvedagent.component';

describe('ApprovedagentComponent', () => {
  let component: ApprovedagentComponent;
  let fixture: ComponentFixture<ApprovedagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
