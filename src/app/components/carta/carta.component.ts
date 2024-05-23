import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addIcons } from 'ionicons';
import { logoFacebook, logoLinkedin, logoGithub, mail, globeSharp} from 'ionicons/icons';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  public formatDate: String | undefined;
  public status: string | undefined;

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'admin',
    from_email: '',
    subject: '',
    message: '',
  });

  constructor(private fb: FormBuilder) {
    this.formatDate = this.formatearFecha(new Date());
    addIcons({
      logoFacebook,
      logoLinkedin,
      logoGithub,
      mail,
      globeSharp,
    });

  }

  ngOnInit(): void {
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

    alert("ESCRIBEME 😜")
  };


  get registerFormControl() {
    return this.form.controls;
  }

  formatearFecha(fecha: Date): string {
    const opciones: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
    return fechaFormateada.toUpperCase(); // Convertir a mayúsculas
  }
}
