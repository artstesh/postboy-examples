import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AppPostboyService} from '../../../../services/app-postboy.service';
import {ButtonClickEvent} from '../../messages/events/button-click.event';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-click-content-presenter',
  imports: [
    NgIf
  ],
  templateUrl: './click-content-presenter.component.html',
  standalone: true,
  styleUrl: './click-content-presenter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClickContentPresenterComponent implements OnInit {
  public value = 0;

  constructor(private postboy: AppPostboyService, private detector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.postboy.sub(ButtonClickEvent).subscribe(ev => {
      this.value = ev.randomNum;
      this.detector.detectChanges();
    })
  }

}
