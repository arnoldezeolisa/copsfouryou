import { Subject } from 'rxjs/Subject';
import {Message} from './message.model';

export class MessageService {
  messageAdded = new Subject<Message[]>();
  startedEditing = new Subject<number>();
  private messages: Message[] = [
    new Message('hello'),
  ];

  getMessages() {
    return this.messages.slice();
  }

  getMessage(index: number) {
    return this.messages[index];
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.messageAdded.next(this.messages.slice());
  }

  addMessages(messages: Message[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.messages.push(...messages);
    this.messageAdded.next(this.messages.slice());
  }

  updateMessage(index: number, newMessage: Message) {
    this.messages[index] = newMessage;
    this.messageAdded.next(this.messages.slice());
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1);
    this.messageAdded.next(this.messages.slice());
  }
}
