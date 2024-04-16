import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{

  public status: string | undefined;

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'admin',
    from_email: '',
    subject: '',
    message: '',
  });

  constructor(private fb: FormBuilder) {}

  async send(){

    try{
      await emailjs.send(
        'service_dd9ln1a',
        'template_royanqa',
        {
          from_name: this.form.value.from_name,
          to_name: this.form.value.to_name,
          from_email: this.form.value.from_email,
          subject: this.form.value.subject,
          message: this.form.value.message,
        },
        {
          publicKey: 'loguy9uRd-2e6dMXW',
        },);

        /* alert("Message has been sent"); */
        this.status = 'success';
        this.form.reset();

    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err);
        return;
      }

      this.status = 'failed';
      console.log('ERROR', err);
    }

  };



}
