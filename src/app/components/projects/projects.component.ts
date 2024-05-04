import { Component } from '@angular/core';

import { ProjectFireService } from '../../services/projectFire.service';
import Project from '../../interfaces/project.fire.interface';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: []
})
export class ProjectsComponent {

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
      /* console.log("Metodo getProjects", projects) */
    });
  }
}
