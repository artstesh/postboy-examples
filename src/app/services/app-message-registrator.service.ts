import {Injectable} from '@angular/core';
import {AppPostboyService} from './app-postboy.service';
import {PostboyAbstractRegistrator} from '@artstesh/postboy';
import {TimeInAppEvent} from '../messages/events/time-in-app.event';
import {TimeInAppService} from './time-in-app.service';

@Injectable()
export class AppMessageRegistrator extends PostboyAbstractRegistrator {

  constructor(postboy: AppPostboyService, timer: TimeInAppService) {
    super(postboy);
    this.registerServices([timer]);
  }

  protected _up(): void {
    this.recordSubject(TimeInAppEvent);
  }
}
