import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatStuffComponent } from './mat-stuff.component';

describe('MatStuffComponent', () => {
  let component: MatStuffComponent;
  let fixture: ComponentFixture<MatStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
