import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-web-dev-bootcamp',
  templateUrl: './web-dev-bootcamp.component.html',
  styleUrl: './web-dev-bootcamp.component.css',
  providers: [ProjectService],
})
export class WebDevBootcampComponent {
  public url: string;
  public project: Project | undefined;
  public confirm: boolean = false;
  public website: any;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
  		let id = params['id'];

      this.getProject(id);

    });

  }

  getProject(id: any) {

    this._projectService.getProject(id).subscribe({
      next: (response) =>{
        //console.log(response)

        if(response.project){

          this.project = response.project;
          //console.log(this.project)

        }},
      error: (e) => console.error(<any>e),
      complete: () => console.info('metodo GetProject completado')
    });
  }

}
