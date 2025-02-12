import {Injectable} from '@angular/core';
import {AppPostboyService} from './app-postboy.service';
import {PostboyAbstractRegistrator} from '@artstesh/postboy';
import {TimeInAppEvent} from '../messages/events/time-in-app.event';
import {TimeInAppOnCommand} from '../messages/commands/time-in-app-on.command';
import {TimeInAppOffCommand} from '../messages/commands/time-in-app-off.command';
import {TimeInAppService} from './time-in-app.service';

@Injectable()
export class AppMessageRegistrator extends PostboyAbstractRegistrator {

  constructor(postboy: AppPostboyService, timer: TimeInAppService) {
    super(postboy);
    this.registerServices([timer]);
  }

  protected _up(): void {
    this.initLockers();
    this.recordSubject(TimeInAppEvent);
    this.recordSubject(TimeInAppOnCommand);
    this.recordSubject(TimeInAppOffCommand);
  }

  private initLockers(): void {
    this.postboy.addLocker({
      locker: TimeInAppOffCommand.ID,
      locking: [TimeInAppEvent.ID],
      unlocker: TimeInAppOnCommand.ID
    });
  }
}
