import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmeshTestComponent } from './umesh-test.component';

describe('UmeshTestComponent', () => {
  let component: UmeshTestComponent;
  let fixture: ComponentFixture<UmeshTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmeshTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmeshTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
