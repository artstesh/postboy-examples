import {PostboyMessage, PostboyMiddleware} from "@artstesh/postboy";

export class ClickerPagePostboyLogger implements PostboyMiddleware{
  handle(message: PostboyMessage): void {
    console.log(message);
  }
}
