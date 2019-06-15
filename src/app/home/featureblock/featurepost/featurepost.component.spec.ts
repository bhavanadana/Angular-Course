import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturepostComponent } from './featurepost.component';

describe('FeaturepostComponent', () => {
  let component: FeaturepostComponent;
  let fixture: ComponentFixture<FeaturepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
