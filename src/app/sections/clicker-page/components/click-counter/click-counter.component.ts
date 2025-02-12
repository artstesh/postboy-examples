import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AppPostboyService} from '../../../../services/app-postboy.service';
import {ButtonClickEvent} from '../../messages/events/button-click.event';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-click-counter',
  imports: [
    NgIf
  ],
  templateUrl: './click-counter.component.html',
  standalone: true,
  styleUrl: './click-counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClickCounterComponent  implements OnInit {
  public value = 0;

  constructor(private postboy: AppPostboyService, private detector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.postboy.sub(ButtonClickEvent).subscribe(() => {
      this.value++;
      this.detector.detectChanges();
    })
  }

}
