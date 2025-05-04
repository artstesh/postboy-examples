import { Injectable } from '@angular/core';
import {PostboyAbstractRegistrator} from '@artstesh/postboy';
import {AppPostboyService} from '../../../services/app-postboy.service';
import {ButtonClickEvent} from '../messages/events/button-click.event';
import {ClickerPagePostboyLogger} from './clicker-page-postboy-logger';

@Injectable()
export class ClickerPageMessageRegistrator  extends PostboyAbstractRegistrator {
  loggingMiddleware = new ClickerPagePostboyLogger();

  constructor(postboy: AppPostboyService) {
    super(postboy);
  }

  protected _up(): void {
    this.postboy.addMiddleware(this.loggingMiddleware);
    this.recordSubject(ButtonClickEvent);
  }

  public customDown(): void {
    this.down();
    this.postboy.removeMiddleware(this.loggingMiddleware);
  }
}
