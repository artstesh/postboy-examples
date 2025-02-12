import { Injectable } from '@angular/core';
import {IPostboyDependingService} from '@artstesh/postboy';
import {AppPostboyService} from '../services/app-postboy.service';
import {GetCurrentTimeQuery} from '../sections/world-time/messages/queries/get-current-time.query';
import {CurrentTime, TimeService} from '../api/time';

@Injectable()
export class TimeInternalService implements IPostboyDependingService{

  constructor(private postboy: AppPostboyService,
              private remote: TimeService) { }

  up(): void {
    this.postboy.sub(GetCurrentTimeQuery).subscribe(qry => this.load(qry));
    }

  private load(qry: GetCurrentTimeQuery) {
    this.remote.apiTimeCurrentCoordinateGet({latitude: qry.latitude, longitude: qry.longitude})
      .subscribe(result => qry.finish(result));
  }
}
