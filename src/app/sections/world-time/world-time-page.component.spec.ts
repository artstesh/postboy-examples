import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldTimePageComponent } from './world-time-page.component';

describe('WorldTimePageComponent', () => {
  let component: WorldTimePageComponent;
  let fixture: ComponentFixture<WorldTimePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldTimePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldTimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
