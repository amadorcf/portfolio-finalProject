import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  public status: string | undefined;

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'admin',
    from_email: '',
    subject: '',
    message: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      to_name: '',
      from_email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  async send(){
    /* emailjs.init('loguy9uRd-2e6dMXW'); */

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


        this.status = 'success';
        this.form.reset();

    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err);
        return;
      }

      console.log('ERROR', err);
    }

  };


  get registerFormControl() {
    return this.form.controls;
  }


}
