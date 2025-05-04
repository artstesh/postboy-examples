import {Component, OnDestroy} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppMessageRegistrator} from './services/app-message-registrator.service';
import {HeaderComponent} from './components/header/header.component';
import {TimeInAppService} from './services/time-in-app.service';
import {FlexModule} from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FlexModule
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
