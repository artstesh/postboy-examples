import {Injectable} from '@angular/core';
import {AppPostboyService} from '../../../services/app-postboy.service';
import {PostboyAbstractRegistrator} from '@artstesh/postboy';
import {GetCurrentTimeQuery} from '../messages/queries/get-current-time.query';
import {TimeInternalService} from '../../../api-internal/time-internal.service';

@Injectable()
export class WorldTimePageMessageRegister extends PostboyAbstractRegistrator{

  constructor(postboy: AppPostboyService, time: TimeInternalService) {
    super(postboy);
    this.registerServices([time]);
  }

  protected override _up(): void {
    this.recordSubject(GetCurrentTimeQuery);
  }
}
