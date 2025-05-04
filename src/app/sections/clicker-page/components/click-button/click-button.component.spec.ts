import {ComponentFixture} from '@angular/core/testing';
import {ClickButtonComponent} from './click-button.component';
import {AppPostboyService} from '../../../../services/app-postboy.service';
import {ButtonClickEvent} from '../../messages/events/button-click.event';
import {MockBuilder, MockProvider, MockRender, ngMocks} from 'ng-mocks';
import {Subject} from 'rxjs';
import {should} from '@artstesh/it-should';
import {PostboyServiceMock} from '@artstesh/postboy-testing';

describe('ClickButtonComponent', () => {
  let component: ClickButtonComponent;
  let fixture: ComponentFixture<ClickButtonComponent>;
  const postboyService = new PostboyServiceMock();

  beforeEach(() => {
    return MockBuilder(ClickButtonComponent)
      .provide(MockProvider(AppPostboyService, postboyService))
  });

  beforeEach(() => {
    postboyService.record(ButtonClickEvent, new Subject<ButtonClickEvent>());
    fixture = MockRender(ClickButtonComponent);
    component = ngMocks.findInstance(ClickButtonComponent);
  });

  afterEach(() => {
    postboyService.reset();
    expect().nothing();
  })

  it('should fire event', () => {
    const button = ngMocks.find(['data-test', 'click-btn']);
    //
    ngMocks.click(button);
    //
    should().number(postboyService.history(ButtonClickEvent).length).equals(1);
  });

  it('should fire a random number', () => {
    const button = ngMocks.find(['data-test', 'click-btn']);
    let firedTimes = 100;
    //
    Array.from({length: firedTimes}).forEach(() => ngMocks.click(button));
    //
    let lastFired = new Set(postboyService.history(ButtonClickEvent).all.map(e => e.randomNum));
    should().number(lastFired.size).greater(firedTimes/2);
  });
});
