import { Component } from '@angular/core';

import { ProjectFireService } from '../../services/projectFire.service';
import Project from '../../interfaces/project.fire.interface';
import { Global } from '../../services/global';
@Component({
  selector: 'app-your-bank',
  templateUrl: './your-bank.component.html',
  styleUrl: './your-bank.component.css'
})
export class YourBankComponent {

  public url:string | undefined;

  projects: Project[];

  constructor(
    private projectFireService: ProjectFireService
  ) {
    this.projects = [];
    this.url = Global.url;
  }

  ngOnInit(){
    this.projectFireService.getProjects().subscribe( projects => {
      this.projects = projects;
      console.log("Metodo getProjects", projects)
    });
  }
}
