import {Component, importProvidersFrom, OnDestroy} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppMessageRegistrator} from './services/app-message-registrator.service';
import {DefaultLayoutDirective, DefaultLayoutGapDirective, FlexFillDirective} from '@ngbracket/ngx-layout';
import {HeaderComponent} from './components/header/header.component';
import {TimeInAppService} from './services/time-in-app.service';
import {TimeApiModule} from './api/time';
import {environments} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlexFillDirective, DefaultLayoutDirective,
    DefaultLayoutGapDirective, HeaderComponent
    ],
  providers: [AppMessageRegistrator,TimeInAppService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy{

  constructor(private registrator: AppMessageRegistrator) {
    registrator.up();
  }

  ngOnDestroy(): void {
    this.registrator.down();
  }
}
