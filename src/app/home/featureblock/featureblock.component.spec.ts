import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureblockComponent } from './featureblock.component';

describe('FeatureblockComponent', () => {
  let component: FeatureblockComponent;
  let fixture: ComponentFixture<FeatureblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
