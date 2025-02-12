import {PostboyGenericMessage} from '@artstesh/postboy';

export class ButtonClickEvent extends PostboyGenericMessage {
  static readonly ID = '41e33f59-ad54-476d-ab87-736bfee344f5';

  constructor(public readonly randomNum: number) {
    super();
  }
}
