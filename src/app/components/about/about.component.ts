import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public title: string | undefined;
  public subtitle: string | undefined;
  public email: string | undefined;

  constructor(){
    this.title = "Amador Cano Fernández";
    this.subtitle = "Future Full-Stack Developer";
    this.email = "amadorcf@outlook.com"
  }

  ngOnInit(): void {


  }

}
