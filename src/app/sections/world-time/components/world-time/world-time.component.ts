import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AppPostboyService} from '../../../../services/app-postboy.service';
import {CurrentTime} from '../../../../api/time';
import {GetCurrentTimeQuery} from '../../messages/queries/get-current-time.query';
import {DefaultLayoutAlignDirective, DefaultLayoutDirective, DefaultLayoutGapDirective} from '@ngbracket/ngx-layout';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-world-time',
  imports: [
    DefaultLayoutDirective,
    DefaultLayoutGapDirective,
    DefaultLayoutAlignDirective,
    NgIf,
    FormsModule
  ],
  templateUrl: './world-time.component.html',
  standalone: true,
  styleUrl: './world-time.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorldTimeComponent {
  time?: CurrentTime;
  lat: number = 0;
  lng: number = 0;
  loading = false;

  constructor(private postboy: AppPostboyService, private detector: ChangeDetectorRef) {
  }

  renew(): void {
    this.loading = true;
    this.postboy.fireCallback(new GetCurrentTimeQuery(this.lat, this.lng), t => {
      this.time = t;
      this.loading = false;
      this.detector.detectChanges();
    })
  }
}
