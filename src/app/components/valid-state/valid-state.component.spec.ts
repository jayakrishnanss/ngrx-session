import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidStateComponent } from './valid-state.component';

describe('ValidStateComponent', () => {
  let component: ValidStateComponent;
  let fixture: ComponentFixture<ValidStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
