import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeniedagentsComponent } from './deniedagents.component';

describe('DeniedagentsComponent', () => {
  let component: DeniedagentsComponent;
  let fixture: ComponentFixture<DeniedagentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeniedagentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeniedagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
