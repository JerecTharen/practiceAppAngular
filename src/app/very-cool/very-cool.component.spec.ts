import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeryCoolComponent } from './very-cool.component';

describe('VeryCoolComponent', () => {
  let component: VeryCoolComponent;
  let fixture: ComponentFixture<VeryCoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeryCoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeryCoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
