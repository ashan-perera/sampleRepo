import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3WorkComponent } from './d3-work.component';

describe('D3WorkComponent', () => {
  let component: D3WorkComponent;
  let fixture: ComponentFixture<D3WorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3WorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
