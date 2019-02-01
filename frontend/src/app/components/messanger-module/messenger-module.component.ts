import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {MessageService} from '../message.service';
import {Message} from '../message.model';
import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'app-messenger-module',
  templateUrl: './messenger-module.component.html',
  styleUrls: ['./messenger-module.component.css']
})
export class MessengerModuleComponent implements OnInit, OnDestroy {
  messages: Message[];
  private subscription: Subscription;
  messagesArray = [];
 
  editMode = false;
  editedItemIndex: number;
  editedItem: Message;
  msg:String;
  /* messageVar = {
     messageContent: '',
   };

   submitted = false;*/




  constructor(private msgService: MessageService,
              private chat:ChatServiceService) { }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log(msg);
      this.messagesArray.push(msg)
    })
  }

  
/*
  ngOnInit() {

    this.messages = this.msgService.getMessages();
    this.subscription = this.msgService.messageAdded
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
        }
      );
  }
*/
  onEditItem(index: number) {
    this.msgService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
