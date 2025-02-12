import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AppPostboyService} from '../../../../services/app-postboy.service';
import {ButtonClickEvent} from '../../messages/events/button-click.event';

@Component({
  selector: 'app-click-button',
  templateUrl: './click-button.component.html',
  standalone: true,
  styleUrl: './click-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClickButtonComponent {

  constructor(private postboy: AppPostboyService) {
  }

  clicked(): void {
    const num = Math.round(Math.random()*1000);
    this.postboy.fire(new ButtonClickEvent(num));
  }
}
