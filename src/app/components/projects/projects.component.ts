import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [ProjectService]
})
export class ProjectsComponent {
  public projects: Project[] | undefined;
  public url:string | undefined;

  constructor(private _projectService: ProjectService){
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();

  }

  getProjects(){
    this._projectService.getProjects().subscribe({
      next: (response) =>
        {
          console.log(response)
          if(response.projects){
          this.projects = response.projects;
        }}
      ,
      error: (e) => console.error(e),
      complete: () => console.info('metodo GetProjects completado')
  })
  }
}
