import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AppPostboyService} from '../../services/app-postboy.service';
import {WorldTimePageMessageRegister} from './services/world-time-page-message-register.service';
import {TimeInternalService} from '../../api-internal/time-internal.service';
import {WorldTimeComponent} from './components/world-time/world-time.component';

@Component({
  selector: 'app-world-time-page',
  imports: [
    WorldTimeComponent
  ],
  templateUrl: './world-time-page.component.html',
  standalone: true,
  styleUrl: './world-time-page.component.scss',
  providers: [WorldTimePageMessageRegister, TimeInternalService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorldTimePageComponent implements OnDestroy {

  constructor(private register: WorldTimePageMessageRegister) {
    register.up();
  }

  ngOnDestroy(): void {
    this.register.down();
  }
}
