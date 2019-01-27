

import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {MessageService} from '../../message.service';
import {Message} from '../../message.model';

@Component({
  selector: 'app-messenger-edit',
  templateUrl: './messenger-edit.component.html',
  styleUrls: ['./messenger-edit.component.css']
})
export class MessengerEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') messageForm: NgForm; /*fetches data from form fields*/
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Message;
  /* messageVar = {
     messageContent: '',
   };

   submitted = false;*/




  constructor(private msgService: MessageService) { }

  ngOnInit() {
    this.subscription = this.msgService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.msgService.getMessage(index);
          this.messageForm.setValue({
            message: this.editedItem.message,
          })
        }
      );
  }

  /*  onSubmit() {
         console.log(this.messageForm);
          console.log(this.messageForm.value);
      this.submitted = true;
      this.messageVar.messageContent = this.messageForm.value.myMessage;
      this.messageForm.reset();


    }*/
  onSubmit(form: NgForm) {
    const value = form.value;   /*error here*/
    const newMessage = new Message(value.message);
    if (this.editMode) {
      this.msgService.updateMessage(this.editedItemIndex, newMessage);
    } else {
      this.msgService.addMessage(newMessage);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.messageForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.msgService.deleteMessage(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

