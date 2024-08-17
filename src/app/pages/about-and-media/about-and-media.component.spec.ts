import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAndMediaComponent } from './about-and-media.component';

describe('AboutAndMediaComponent', () => {
  let component: AboutAndMediaComponent;
  let fixture: ComponentFixture<AboutAndMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutAndMediaComponent]
    });
    fixture = TestBed.createComponent(AboutAndMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
