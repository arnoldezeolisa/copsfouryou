import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {MessageService} from '../message.service';
import {Message} from '../message.model';

@Component({
  selector: 'app-messenger-module',
  templateUrl: './messenger-module.component.html',
  styleUrls: ['./messenger-module.component.css']
})
export class MessengerModuleComponent implements OnInit, OnDestroy {
  messages: Message[];
  private subscription: Subscription;

  constructor(private msgService: MessageService) {
  }

  ngOnInit() {
    this.messages = this.msgService.getMessages();
    this.subscription = this.msgService.messageAdded
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
        }
      );
  }

  onEditItem(index: number) {
    this.msgService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
