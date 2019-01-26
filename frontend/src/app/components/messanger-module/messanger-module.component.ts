import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-messanger-module',
  templateUrl: './messanger-module.component.html',
  styleUrls: ['./messanger-module.component.css']
})
export class MessangerModuleComponent implements OnInit {
  @ViewChild('f') messageForm: NgForm;
  messageVar = {
    messageContent: '',
  };

  submitted = false;


  onSubmit() {
/*    console.log(this.messageForm);
    console.log(this.messageForm.value);*/
    this.submitted = true;
    this.messageVar.messageContent = this.messageForm.value.myMessage;
  }
  constructor() { }

  ngOnInit() {
  }

}
