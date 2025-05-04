import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AppPostboyService} from '../../../../services/app-postboy.service';
import {TimeInAppEvent} from '../../../../messages/events/time-in-app.event';
import {FlexModule} from '@ngbracket/ngx-layout';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-time-on-site',
  imports: [
    NgIf,
    FlexModule
  ],
  templateUrl: './time-on-site.component.html',
  standalone: true,
  styleUrl: './time-on-site.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeOnSiteComponent implements OnInit {
  seconds = 0;
  isOn = true;

  constructor(private postboy: AppPostboyService, private detector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.postboy.sub(TimeInAppEvent).subscribe(ev => {
      this.seconds = ev.seconds;
      this.detector.detectChanges();
    });
  }

  timeOff(): void {
    this.isOn = false;
    this.postboy.lock(TimeInAppEvent);
    this.detector.detectChanges();
  }

  timeOn(): void {
    this.isOn = true;
    this.postboy.unlock(TimeInAppEvent);
    this.detector.detectChanges();
  }


}
