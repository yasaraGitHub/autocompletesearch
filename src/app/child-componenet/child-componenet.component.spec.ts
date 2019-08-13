import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponenetComponent } from './child-componenet.component';

describe('ChildComponenetComponent', () => {
  let component: ChildComponenetComponent;
  let fixture: ComponentFixture<ChildComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
