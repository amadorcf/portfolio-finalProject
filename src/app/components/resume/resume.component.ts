import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { mail, logoLinkedin, logoGithub} from 'ionicons/icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  public title: string | undefined;
  public subtitle: string | undefined;
  public description: string | undefined;

  constructor(){
    this.title = "Amador Cano Fernández";
    this.subtitle = "Future Full-Stack Developer";
    this.description = "Graduado en Ingeniería Electrónica y Automática. Organizado, resolutivo, trabajador y con espíritu de continuo aprendizaje y renovación. Actualmente inmerso en un giro profesional buscando nuevas experiencias en el mundo de la programación."

    addIcons({
      logoLinkedin,
      logoGithub,
      mail
    });
  }


}

