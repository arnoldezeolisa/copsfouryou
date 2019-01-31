import { Injectable } from '@angular/core';
import { WebSocketServiceService } from './web-socket-service.service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  messages: Subject<any>;
  
  // Our constructor calls our wsService connect method
  constructor(private wsService: WebSocketServiceService) {
    this.messages = <Subject<any>>wsService
      .connect()
      .map((response: any): any => {
        return response;
      })
   }
  
  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.messages.next(msg);
  }
}
