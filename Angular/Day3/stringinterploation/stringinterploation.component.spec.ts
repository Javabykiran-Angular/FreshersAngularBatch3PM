import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringinterploationComponent } from './stringinterploation.component';

describe('StringinterploationComponent', () => {
  let component: StringinterploationComponent;
  let fixture: ComponentFixture<StringinterploationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringinterploationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringinterploationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
