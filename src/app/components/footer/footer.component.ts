import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public year: Number | undefined;

  constructor(){
    this.year = (new Date()).getFullYear();
  }

}
