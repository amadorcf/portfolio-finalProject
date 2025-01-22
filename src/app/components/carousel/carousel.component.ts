import { Component, OnInit } from '@angular/core';

import Project from '../../interfaces/project.fire.interface';
import { ProjectFireService } from '../../services/projectFire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public projects: Project[] = [];
  responsiveOptions = [
    {
      breakpoint: '1024px', // Pantallas grandes
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px', // Tablets
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px', // Móviles
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(
    private projectFireService: ProjectFireService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener los proyectos desde el servicio
    this.projectFireService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
      //console.log(projects)
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
