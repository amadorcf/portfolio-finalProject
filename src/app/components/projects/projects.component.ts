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

  public url: string | undefined = Global.url;
  public projects: Project[] = [];

  constructor(
    private projectFireService: ProjectFireService,
    private router: Router
  ) {
  }

  ngOnInit(){
    // Obtener los proyectos desde el servicio
    this.projectFireService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
      // console.log("Proyectos obtenidos:", projects); // Puedes dejarlo si es necesario para depuración.
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
