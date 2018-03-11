import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMakerComponent } from './ad-maker.component';

describe('AdMakerComponent', () => {
  let component: AdMakerComponent;
  let fixture: ComponentFixture<AdMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
