import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOnSiteComponent } from './time-on-site.component';

describe('TimeOnSiteComponent', () => {
  let component: TimeOnSiteComponent;
  let fixture: ComponentFixture<TimeOnSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeOnSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeOnSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
