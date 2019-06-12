import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoTagComponent } from './seo-tag.component';

describe('SeoTagComponent', () => {
  let component: SeoTagComponent;
  let fixture: ComponentFixture<SeoTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
