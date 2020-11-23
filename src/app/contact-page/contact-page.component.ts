import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { contactFormSend } from '../shared/animation/animations';
import { contactMessageInfo } from '../shared/interfaces';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  animations: [contactFormSend],
})
export class ContactPageComponent implements OnInit {
  form: FormGroup;
  isSend: string = 'false';
  afterSend: boolean = false;
  messageInfo: contactMessageInfo;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(20),
      ]),
    });
    AOS.init();
  }

  get formName() {
    return this.form.get('name');
  }

  get formEmail() {
    return this.form.get('email');
  }

  get formMessage() {
    return this.form.get('message');
  }

  formAnimeDone(event) {
    if (event.toState === 'true') {
      this.afterSend = true;
    }
  }

  onSubmit() {
    this.isSend = 'true';
    this.messageInfo = this.form.value;
  }
}
