import { Injectable } from '@angular/core';
import {PostboyAbstractRegistrator} from '@artstesh/postboy';
import {AppPostboyService} from '../../../services/app-postboy.service';
import {ButtonClickEvent} from '../messages/events/button-click.event';

@Injectable()
export class ClickerPageMessageRegistrator  extends PostboyAbstractRegistrator {

  constructor(postboy: AppPostboyService) {
    super(postboy);
  }

  protected _up(): void {
    this.recordSubject(ButtonClickEvent);
  }
}
