import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    private projectFireService: ProjectFireService,
    private router: Router
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

  checkRedirect(projectName: string, event: Event) {
    if (projectName === 'YourBank') {
      event.preventDefault(); // Evita que se siga el enlace predeterminado.
      this.router.navigate(['/projects/your-bank']); // Redirige a otro enlace.
    }

    if (projectName === 'YourMovies') {
      event.preventDefault(); // Evita que se siga el enlace predeterminado.
      window.open('https://amadorcf.github.io/Movies_JSProject/', '_blank');
    }
  }
}
