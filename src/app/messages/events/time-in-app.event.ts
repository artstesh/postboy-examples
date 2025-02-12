import {PostboyGenericMessage} from '@artstesh/postboy';

export class TimeInAppEvent extends PostboyGenericMessage {
  static readonly ID = '5d6b4434-0c6a-4dbe-89ab-50d70eab34c7';

  constructor(public seconds: number) {
    super();
  }
}
