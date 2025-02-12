import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AppPostboyService} from '../../../../services/app-postboy.service';
import {TimeInAppEvent} from '../../../../messages/events/time-in-app.event';
import {TimeInAppOffCommand} from '../../../../messages/commands/time-in-app-off.command';
import {TimeInAppOnCommand} from '../../../../messages/commands/time-in-app-on.command';
import {DefaultLayoutAlignDirective, DefaultLayoutDirective, DefaultLayoutGapDirective} from '@ngbracket/ngx-layout';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-time-on-site',
  imports: [
    DefaultLayoutDirective,
    DefaultLayoutAlignDirective,
    DefaultLayoutGapDirective,
    NgIf
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
    this.postboy.fire(new TimeInAppOffCommand());
    this.detector.detectChanges();
  }

  timeOn(): void {
    this.isOn = true;
    this.postboy.fire(new TimeInAppOnCommand());
    this.detector.detectChanges();
  }


}
