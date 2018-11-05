import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecusinedishComponent } from './updatecusinedish.component';

describe('UpdatecusinedishComponent', () => {
  let component: UpdatecusinedishComponent;
  let fixture: ComponentFixture<UpdatecusinedishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecusinedishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecusinedishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
