import {PostboyCallbackMessage, PostboyGenericMessage} from '@artstesh/postboy';
import {CurrentTime} from '../../../../api/time';

export class GetCurrentTimeQuery extends PostboyCallbackMessage<CurrentTime> {
  static readonly ID = '028db88f-de0b-4628-9260-bf9d77f86fed';

  constructor(public latitude: number, public longitude: number) {
    super();
  }
}
