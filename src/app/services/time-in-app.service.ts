import {Injectable} from '@angular/core';
import {IPostboyDependingService} from '@artstesh/postboy';
import {AppPostboyService} from './app-postboy.service';
import {TimeInAppEvent} from '../messages/events/time-in-app.event';

@Injectable()
export class TimeInAppService implements IPostboyDependingService {
  seconds = 0;
  step = 1;

  constructor(private postboy: AppPostboyService) {
  }

  up(): void {
    setInterval(() => {
      this.seconds += this.step;
      this.postboy.fire(new TimeInAppEvent(this.seconds));
    }, this.step * 1000);
  }
}
