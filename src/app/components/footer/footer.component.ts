import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoFacebook, logoLinkedin, logoGithub} from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public year: Number | undefined;

  constructor(){
    this.year = (new Date()).getFullYear();
    
    addIcons({
      logoFacebook,
      logoLinkedin,
      logoGithub
    });
  }

}
