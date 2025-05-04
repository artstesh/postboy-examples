import {Component, OnDestroy} from '@angular/core';
import {FlexModule} from '@ngbracket/ngx-layout';
import {ClickButtonComponent} from './components/click-button/click-button.component';
import {ClickerPageMessageRegistrator} from './services/clicker-page-message-registrator.service';
import {ClickContentPresenterComponent} from './components/click-content-presentator/click-content-presenter.component';
import {ClickCounterComponent} from './components/click-counter/click-counter.component';

@Component({
  selector: 'app-clicker-page',
  imports: [
    ClickButtonComponent,
    ClickContentPresenterComponent,
    ClickCounterComponent,
    FlexModule
  ],
  providers: [ClickerPageMessageRegistrator],
  standalone: true,
  templateUrl: './clicker-page.component.html',
  styleUrl: './clicker-page.component.scss'
})
export class ClickerPageComponent implements OnDestroy{

  constructor(private registrator: ClickerPageMessageRegistrator) {
    registrator.up();
  }

  ngOnDestroy(): void {
    this.registrator.customDown();
  }
}
